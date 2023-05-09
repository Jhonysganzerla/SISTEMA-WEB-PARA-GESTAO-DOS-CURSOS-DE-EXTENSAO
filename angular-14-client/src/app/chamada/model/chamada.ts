import { AlunoTurmaCurso } from "src/app/alunoturmacurso/model/alunoturmacurso";

export class Chamada {
  id?: number;
  data: any;
  presenca: String;//Presente Ausente Feriado Cancelado
  conteudoministrado: String;
  alunoturmacurso: AlunoTurmaCurso;
}
