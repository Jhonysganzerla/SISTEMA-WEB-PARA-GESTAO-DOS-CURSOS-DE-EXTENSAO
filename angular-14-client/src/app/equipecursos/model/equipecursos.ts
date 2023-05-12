import { TipoTransporte } from 'src/app/tipotransporte/model/tipotransporte';
import { Usuario } from 'src/app/usuario/model/usuario';
import { UsuarioEquipe } from './usuarioequipe';

export class EquipeCursos {
 id: number;
 papel: String;
 transporte: TipoTransporte;
 usuarios: Array<Usuario> = [];
}
