import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class RegisterEmployeeDto {
  @ApiProperty({ type: String, example: 'Test Employee', required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: String, example: '+919650639096', required: true })
  @IsPhoneNumber()
  @IsNotEmpty()
  mobile: string;

  @ApiProperty({ type: String, example: 'Test', required: true })
  @IsString()
  @IsNotEmpty()
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minUppercase: 1,
      minSymbols: 1,
    },
    {
      message:
        'Password must be minimum 8 characters long and must contains atleast 1 uppercase , 1 lowercase , 1 number and 1 special characters .',
    },
  )
  password: string;
}
