import { TipoCursos } from "src/app/tipocursos/model/tipocursos";

export class Cursos {
  id: number;
  nome: string;
  descricao: string;
  nivel: string;
  conteudo: string;
  observacao: string;
  tipoCursos: TipoCursos;
}
