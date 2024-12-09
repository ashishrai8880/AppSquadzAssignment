import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class LoginEmployeeDto {
  @ApiProperty({ type: String, example: '+919650639096', required: true })
  @IsString()
  @IsPhoneNumber()
  mobile: string;

  @ApiProperty({ type: String, example: 'Test@123', required: true })
  @IsString()
  @IsNotEmpty()
  password: string;
}
