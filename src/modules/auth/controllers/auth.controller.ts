import { Controller, Post, Body, Ip } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginEmployeeDto, RegisterEmployeeDto } from '../dto';
import { AuthInterface } from '../interfaces/auth.interface';

@Controller('/auth/employee')
export class AuthController implements AuthInterface {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  async registerEmployee(@Body() createAuthDto: RegisterEmployeeDto) {
    return await this.authService.registerEmployee(createAuthDto);
  }

  @Post('/login')
  async loginEmployee(
    @Body() payload: LoginEmployeeDto,
    @Ip() ipAddress: string,
  ) {
    return await this.authService.loginEmployee(payload, ipAddress);
  }
}
