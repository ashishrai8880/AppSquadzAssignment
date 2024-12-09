import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;
export async function encodePassword(password: string): Promise<string> {
  return await bcrypt.hash(password, saltOrRounds);
}
export async function isPasswordMatch(
  inputPassword: string,
  savedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(inputPassword, savedPassword);
}
