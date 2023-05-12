import { UsuarioService } from './../../../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoCursos } from 'src/app/tipocursos/model/tipocursos';
import { TipoCursosService } from 'src/app/tipocursos/tipocursos.service';
import { EquipeCursosService } from '../../equipecursos.service';
import { EquipeCursos } from '../../model/equipecursos';
import { TipoTransporteService } from 'src/app/tipotransporte/tipotransporte.service';
import { TipoTransporte } from 'src/app/tipotransporte/model/tipotransporte';
import { Usuario } from 'src/app/usuario/model/usuario';
import { UsuarioEquipe } from '../../model/usuarioequipe';

@Component({
  selector: 'app-equipecursos-crud',
  templateUrl: './equipecursos-crud.component.html',
  styleUrls: ['./equipecursos-crud.component.css'],
})
export class EquipeCursosCrudComponent implements OnInit {

  form: FormGroup

  isNew: boolean = true;
  EquipecursosId: number;
  transportesTipoOptions: Array<TipoTransporte>;
  usuariosOptions: Array<Usuario>;

  constructor(
    private formBuilder: FormBuilder,
    private tipoTransporteService: TipoTransporteService,
    private equipeCursosService: EquipeCursosService,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.tipoTransporteService.getTipoTransportes().subscribe((tipoTransportes) => {
      this.transportesTipoOptions = tipoTransportes;
    });

    this.usuarioService.getUsuarios().subscribe((usuarios) => {
      this.usuariosOptions = usuarios;
    });


    this.form = this.formBuilder.group({
      id: [''],
      papel: ['', [Validators.required]],
      transporte: [''],
      usuarios: [[],],
    });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isNew = false;
        this.EquipecursosId = +params['id'];
        this.equipeCursosService.getEquipeCurso(this.EquipecursosId).subscribe((cursos) => {
          this.form.patchValue({
            id: cursos.id,
            papel: cursos.papel,
            transporte: cursos.transporte,
            usuarios: cursos.usuarios,
          });
        });
      }else {
        this.form.patchValue({
          usuarios: [[]],
        });
      }
    });
  }

  onSubmit() {
    const cursos: EquipeCursos = this.form.value;
    if (!this.form.valid) return;

    cursos.usuarios = cursos.usuarios.map((usuario) => {
      let usuario2 = new Usuario();
      usuario2.id = usuario.id;
      return usuario2
    });

    
    this.equipeCursosService.save(cursos).subscribe(() => {
      this.router.navigateByUrl('/equipe');
    });
  }

  onCancel() {
    this.router.navigateByUrl('/equipe');
  }

  adicionarUsuario() {
    const usuarios = this.form.get('usuarios')!.value;
    usuarios.push({ id: null, usuario: null });
    this.form.get('usuarios')!.setValue(usuarios);
  }

  removerUsuario(index: number) {
    const usuarios = this.form.get('usuarios')!.value;
    usuarios.splice(index, 1);
    this.form.get('usuarios')!.setValue(usuarios);
  }

  getUsuarios() {
    return this.form.get('usuarios')!.value;
  }

  
  onSelectUsuario(event: any, index: number){
    this.form.get('usuarios')!.value[index] = event;
  }

}
