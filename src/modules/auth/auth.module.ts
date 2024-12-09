import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { AuthRepository } from './repositories/auth.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './entities/employee.entity';
import { JwtUtilsServices } from 'src/utils/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository, JwtUtilsServices],
})
export class AuthModule {}
