import { LoginEmployeeDto, RegisterEmployeeDto } from '../dto';
import { Employee } from '../entities/employee.entity';

export interface AuthInterface {
  registerEmployee(createAuthDto: RegisterEmployeeDto): Promise<{
    success: boolean;
    message: string;
    data: Employee;
  }>;

  loginEmployee(
    payload: LoginEmployeeDto,
    ipAddress: string,
  ): Promise<{
    success: boolean;
    message: string;
    data: Employee | any;
    token: string;
  }>;
}
