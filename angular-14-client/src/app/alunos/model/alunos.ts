import { AlunoTurmaCurso } from "src/app/alunoturmacurso/model/alunoturmacurso";
import { TurmaCursos } from "src/app/turmacursos/model/turmacursos";

export class Aluno {
  id: Number;
  nome: Text;
  telefone: Text;
  email: Text;
  nomeContato: Text;
  telefoneContato: Text;
  lstTurmaCursos: any;
}
