import { CursosGraduacao } from './../../cursosgraduacao/model/cursosgraduacao';

export class Usuario {
  id: number;
  email: string;
  password: string;
  nome: string;
  tipo: string;
  telefone: string;
  ra: string;
  cursoGraduacao: CursosGraduacao;
}
