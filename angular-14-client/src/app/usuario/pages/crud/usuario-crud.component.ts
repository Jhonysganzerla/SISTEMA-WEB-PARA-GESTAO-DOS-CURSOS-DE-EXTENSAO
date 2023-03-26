import { Usuario } from './../../model/usuario';
import { UsuarioService } from './../../usuario.service';
import { CursosGraduacao } from './../../../cursosgraduacao/model/cursosgraduacao';
import { CursosGraduacaoService } from './../../../cursosgraduacao/cursosgraduacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-crud',
  templateUrl: './usuario-crud.component.html',
  styleUrls: ['./usuario-crud.component.css'],
})
export class UsuarioCrudComponent implements OnInit {

  form: FormGroup

  isNew: boolean = true;
  usuarioId: number;
  cursosGraduacaoOptions: Array<CursosGraduacao>;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private cursosGraduacaoService: CursosGraduacaoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cursosGraduacaoService.getCursosGraduacao().subscribe((cursos) => {
      this.cursosGraduacaoOptions = cursos;
    });

    this.form = this.formBuilder.group({
      id: [null],
      nome: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', !this.isNew ? Validators.required : ''],
      telefone: ['', Validators.required],
      ra: ['', Validators.required],
      tipo: ['', Validators.required],
      cursoGraduacao: ['', Validators.required],
    });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isNew = false;
        this.usuarioId = +params['id'];
        this.usuarioService.getUsuario(this.usuarioId).subscribe((usuario) => {
          this.form.patchValue({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            password: usuario.password || '',
            telefone: usuario.telefone,
            ra: usuario.ra,
            tipo: usuario.tipo,
            cursoGraduacao: usuario.cursoGraduacao != null ? this.cursosGraduacaoOptions.find(cursoGraduacao => cursoGraduacao.id === usuario.cursoGraduacao.id) : null,
          });
        });
      }
    });
  }

  onSubmit() {
    const usuario: Usuario = this.form.value;
    if (!this.form.valid) return;
    this.usuarioService.save(usuario).subscribe(() => {
      this.router.navigateByUrl('/usuario');
    });
  }

  onCancel() {
    this.router.navigateByUrl('/usuario');
  }
}
