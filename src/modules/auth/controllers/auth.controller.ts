import { Controller, Post, Body, Ip } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginEmployeeDto, RegisterEmployeeDto } from '../dto';

@Controller('/auth/employee')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  async registerEmployee(@Body() createAuthDto: RegisterEmployeeDto) {
    console.log(
      '🚀 ~ AuthController ~ registerEmployee ~ createAuthDto:',
      createAuthDto,
    );
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
