import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Employee extends Document {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true, unique: true })
  mobile: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: Boolean, default: false })
  status: boolean;

  @Prop({ type: Date, required: false, default: Date.now() })
  last_login: Date;

  @Prop({ type: String, required: false, default: null })
  ip_address: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);

export type EmployeeDocument = Employee & Document;
