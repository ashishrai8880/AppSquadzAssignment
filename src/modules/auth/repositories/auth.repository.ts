import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee, EmployeeDocument } from '../entities/employee.entity';
import { Model } from 'mongoose';
import { RegisterEmployeeDto } from '../dto';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async registerEmployee(payload: RegisterEmployeeDto) {
    return await this.employeeModel.create(payload);
  }

  async findByMobile(mobile: string) {
    return await this.employeeModel.findOne({ mobile: mobile });
  }
}
