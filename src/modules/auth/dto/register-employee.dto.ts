import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class RegisterEmployeeDto {
  @ApiProperty({ type: String, example: 'Test Employee', required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: String, example: '+919650639096', required: true })
  @IsPhoneNumber()
  @IsNotEmpty()
  mobile: string;

  @ApiProperty({ type: String, example: 'Test@123', required: true })
  @IsString()
  @IsNotEmpty()
  password: string;
}
