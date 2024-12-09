import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtUtilsServices {
  constructor(private jwtService: JwtService) {}

  async signToken(payload) {
    return await this.jwtService.signAsync(payload);
  }

  async decodeToken(token: string) {
    return await this.jwtService.decode(token);
  }
}
