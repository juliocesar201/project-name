import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsuarioController } from './usuario.controllers';
import { Usuario } from './usuario.entity';
import { usuarioProviders } from './usuario.providers';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioController],
  providers: [
    ...usuarioProviders,
    UsuarioService,
  ],
  exports:[UsuarioService]
})
export class UsuarioModule {}