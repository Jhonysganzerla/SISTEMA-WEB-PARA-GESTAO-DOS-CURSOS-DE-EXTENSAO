import { map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamada } from '../../model/chamada';
import { ChamadaService } from '../../chamada.service';
import { AlertService } from 'src/app/alert/alert.service';

@Component({
  selector: 'app-chamada-crud',
  templateUrl: './chamada-crud.component.html',
  styleUrls: ['./chamada-crud.component.css'],
})
export class ChamadaCrudComponent implements OnInit {
  listaDeDatas: Array<Date>;
  listaDeChamada: Array<Chamada> = [];

  hojeFormatado = new Date().toLocaleDateString()

  listaDeChamadasMap: Map<String, Array<Chamada>> = new Map<
    string,
    Array<Chamada>
  >();

  formatarData = (data: Date) =>{
    return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
  }

  idTurma: any;

  constructor(
    private chamadaService: ChamadaService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService,
  ) {}

  setData(event: any, index: number) {
    this.listaDeChamada[index].data = event.target.value;
  }

  ngOnInit() {
    this.idTurma = this.route.snapshot.paramMap.get('idTurma');

    this.chamadaService
      .getChamadaParaTurma(this.idTurma)
      .subscribe((listaDeChamada) => {
        this.listaDeChamada = listaDeChamada;

        let set: Set<String> = new Set(
          listaDeChamada.map((chamada) => {
            let d = new Date(chamada.data);
            d.setTime( d.getTime() + d.getTimezoneOffset()*60*1000 );
            return this.formatarData(d);
          }));


        this.listaDeDatas = Array.from(set.keys()).map((data) => {
          return new Date(
            parseInt(data.split('/')[2]),
            parseInt(data.split('/')[1]) - 1,
            parseInt(data.split('/')[0])
          );
        });


        console.log(this.listaDeChamada)
        this.listaDeChamada.forEach((chamada) => {
          if (this.listaDeChamadasMap.has(chamada.alunoturmacurso.nome)) {
            let aluno = this.listaDeChamadasMap.get(
              chamada.alunoturmacurso.nome
            );
            if (aluno) {
              aluno.push(chamada);
            }
          } else {
            this.listaDeChamadasMap.set(chamada.alunoturmacurso.nome, [chamada,]);
          }
        });
      });
  }

  onSubmit() {
    
    this.listaDeChamada = [];

    for(let i = 0; i < this.pegarNomesAlunoFromMap().length; i++){
      const aluno = this.pegarNomesAlunoFromMap()[i];
      const chamadasDoAluno = this.listaDeChamadasMap.get(aluno);
      
      if(chamadasDoAluno){
        this.listaDeChamada = this.listaDeChamada.concat(chamadasDoAluno);
      }
    }
   
    
    this.listaDeChamada.forEach((chamada) => {
      if(chamada.data.toString().length > 10){

        let data = chamada.data.toLocaleDateString().split('/');
        let dataFormatada = `${data[2]}-${data[1]}-${data[0]}`
        chamada.data = dataFormatada;
      }
    });


    //verifica se nao há chamadas repetidas
    for(let i = 0; i < this.pegarNomesAlunoFromMap().length; i++){
      const aluno = this.pegarNomesAlunoFromMap()[i];
      const chamadasDoAluno = this.listaDeChamadasMap.get(aluno);

      if(chamadasDoAluno){
        for(let j = 0; j < chamadasDoAluno.length; j++){
          const chamada = chamadasDoAluno[j];
          let cont = 0;
          for(let k = 0; k < chamadasDoAluno.length; k++){
            const chamada2 = chamadasDoAluno[k];

            let data1Convertida = new Date(chamada.data);
            let data2Convertida = new Date(chamada2.data);

            data1Convertida.setTime( data1Convertida.getTime() + data1Convertida.getTimezoneOffset()*60*1000);
            data2Convertida.setTime( data2Convertida.getTime() + data2Convertida.getTimezoneOffset()*60*1000);

            if(data1Convertida === data2Convertida){
              cont++;
            }
          }

          if(cont > 1){
            let d = new Date(chamada.data);
            d.setTime( d.getTime() + d.getTimezoneOffset()*60*1000 );
            this.alertService.errorList([`Há mais de uma chamada com a data ${this.formatarData(d)}`]) // para o aluno ${aluno}
            return;
          }
        }
      }
      
    }
    

    this.chamadaService.save(this.listaDeChamada).subscribe(() => {
      this.router.navigateByUrl('/chamada');
    });
  }

  onCancel() {
    this.router.navigateByUrl('/chamada');
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  adicionarData() {
    let dataAtual = new Date();
    this.listaDeDatas.push(dataAtual);

    for (let i = 0; i < this.pegarNomesAlunoFromMap().length; i++) {
      const aluno = this.pegarNomesAlunoFromMap()[i];

      let chamadasDoAluno = this.listaDeChamadasMap.get(aluno);

      if (chamadasDoAluno) {
        let chamadaNova: Chamada =  JSON.parse(
          JSON.stringify(chamadasDoAluno[chamadasDoAluno.length - 1])
        ) ;
        chamadaNova.id = undefined;
        chamadaNova.data = dataAtual;
        chamadaNova.conteudoministrado = '';
        chamadaNova.presenca = 'Presente';
        chamadasDoAluno.push(chamadaNova);
      }
    }
  }

  pegarNomesAlunoFromMap() {
    return Array.from(this.listaDeChamadasMap.keys());
  }

  pegaChamadasFromMap(aluno: String) {
    return this.listaDeChamadasMap.get(aluno);
  }

  changeData(event: any, index: number) {

    this.alertService.clear();

    this.listaDeChamada[index].data = event;

    for (let i = 0; i < this.pegarNomesAlunoFromMap().length; i++) {
      const aluno = this.pegarNomesAlunoFromMap()[i];

      let chamadasDoAluno = this.listaDeChamadasMap.get(aluno);

      if (chamadasDoAluno) {
        let chamadaNova: Chamada = JSON.parse(
          JSON.stringify(chamadasDoAluno[index])
        ) ;
        chamadaNova.data = this.listaDeChamada[index].data;
        chamadasDoAluno[index] = chamadaNova
      }
    }
  }


  totaisPresencaPorAluno(aluno: String) {
    let relatorio: Map<String, any> = new Map<String, any>();
    let totais = [0,0,0,0];

      let chamadasDoAluno = this.listaDeChamadasMap.get(aluno);

        if (chamadasDoAluno) {
          let total: Map<String, number> = new Map<String, number>();
          total.set('Presente', 1);
          total.set('Ausente', 1);
          total.set('Feriado', 1);
          total.set('Cancelado', 1);

          chamadasDoAluno.forEach((chamada) => {
            let cont = total.get(chamada.presenca);
            if (!!cont) {
              total.set(chamada.presenca, cont + 1);
            }
          });
          

          relatorio.set(aluno, { total: total });
        }

        totais[0] = relatorio.get(aluno)?.total.get('Presente')-1;
        totais[1] = relatorio.get(aluno)?.total.get('Ausente')-1;
        totais[2] = relatorio.get(aluno)?.total.get('Feriado')-1;
        totais[3] = relatorio.get(aluno)?.total.get('Cancelado')-1;

      return totais;
  }

}
