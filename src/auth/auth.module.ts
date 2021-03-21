import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import passport from 'passport';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './lacal.strategy';

@Module({
  imports: [UsuarioModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
