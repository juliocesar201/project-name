import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resualtado.dto';
import { Repository } from 'typeorm';
import { UsuarioCadastraDto } from './dto/usuario.cadastra.dto';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async cadastrar(data:UsuarioCadastraDto): Promise<ResultadoDto>{
    let usuario = new Usuario()
    usuario.email = data.email
    usuario.nome = data.nome
    usuario.password = data.password
    return this.usuarioRepository.save(usuario)
    .then((result) => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Usuário cadastrado com sucesso"
      }

    })
    .catch((error) => {
      return <ResultadoDto>{
        status: false,
        mensagem: "Houve um erro ao cadastrar o usuario"
      }

    })
    
  }
  async findOne(email: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOne({email:email});
  }
}