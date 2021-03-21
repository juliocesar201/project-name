import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
    constructor(private usuarioService: UsuarioService) {}

    async validarUsuario(email: string, password: string): Promise<any> {
        const usuario = await this.usuarioService.findOne(email);
        if (usuario && usuario.password === password) {
          const { password, ...result } = usuario;
          return result;
        }
        return null;
      }
}
