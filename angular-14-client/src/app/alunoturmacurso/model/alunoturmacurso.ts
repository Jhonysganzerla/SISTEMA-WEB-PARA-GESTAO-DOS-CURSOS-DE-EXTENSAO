import { Aluno } from 'src/app/alunos/model/alunos';
import { TurmaCursos } from 'src/app/turmacursos/model/turmacursos';

export class AlunoTurmaCurso {
   id: number;
   aluno : Aluno;
   nome: string;
   lstTurmaCursos : Array<TurmaCursos>;
}
