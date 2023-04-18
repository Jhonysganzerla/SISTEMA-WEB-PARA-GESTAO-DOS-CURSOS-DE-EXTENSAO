import { Cursos } from 'src/app/cursos/model/cursos';
import { EquipeCursos } from 'src/app/equipecursos/model/equipecursos';

export class TurmaCursos {

  id: number;
  dataInicio: Date;
  dataFim: Date;
  horaInicio: any;
  cargaHoraria: any;
  duracao: any;
  diaSemana: number;
  local: String;
  sala: String;
  requisitos: String;
  equipeCursos: EquipeCursos;
  cursos: Cursos;
}
