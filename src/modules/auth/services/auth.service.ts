import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterEmployeeDto } from '../dto/register-employee.dto';
import { AuthRepository } from '../repositories/auth.repository';
import { encodePassword, isPasswordMatch } from 'src/utils/bcrypt';
import { LoginEmployeeDto } from '../dto';
import { JwtUtilsServices } from 'src/utils/jwt';

@Injectable()
export class AuthService {
  constructor(
    private authRepository: AuthRepository,
    private jwtServices: JwtUtilsServices,
  ) {}

  async registerEmployee(createAuthDto: RegisterEmployeeDto) {
    const exists = await this.authRepository.findByMobile(createAuthDto.mobile);

    if (exists) {
      throw new BadRequestException({
        success: false,
        message: 'User Already exists with given mobile number',
      });
    }

    const hashedPassword = await encodePassword(createAuthDto.password);

    const user = await this.authRepository.registerEmployee({
      ...createAuthDto,
      password: hashedPassword,
    });

    const { password, ...userWithoutPassword } = user?.['_doc'];

    return {
      success: true,
      message: 'Employee Registered Successfully',
      data: userWithoutPassword,
    };
  }

  async loginEmployee(payload: LoginEmployeeDto, ipAddress: string) {
    const user = await this.authRepository.findByMobile(payload.mobile);
    if (!user) {
      throw new UnauthorizedException({
        success: false,
        message: 'Invalid Credentials',
      });
    }

    // Compare password
    if (!isPasswordMatch(payload.password, user.password)) {
      throw new UnauthorizedException({
        success: false,
        message: 'Invalid Credentials',
      });
    }

    // Update last login and IP address
    user.last_login = new Date();
    user.ip_address = ipAddress;
    await user.save();

    const token = await this.jwtServices.signToken({
      _id: user._id,
      name: user.name,
      status: user.status,
    });

    return {
      success: true,
      message: 'You logged in successfully',
      data: {
        id: user.id,
        name: user.name,
        mobile: user.mobile,
        status: user.status,
      },
      token: token,
    };
  }
}
