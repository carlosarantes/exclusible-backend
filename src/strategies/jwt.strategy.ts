import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'IVVBjIvKMrCaW6i2eb1lJAYm6sWkLTjgC8Om/czevjs=',
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}
