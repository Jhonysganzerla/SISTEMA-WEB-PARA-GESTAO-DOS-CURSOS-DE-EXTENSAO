import { JWTTokenService } from './../../auth/jwttoken.service';
import { LocalStorageService } from './../../shared/localStorageService';
import { UsuarioLoginDTO } from './../model/usuarioLoginDTO';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLoginDTO = {ra : "", password: ""};
  message: any;

  constructor(private service: LoginService,
     private localStorageService: LocalStorageService,
      private router:Router,
      private jwtService: JWTTokenService) { }

  ngOnInit() {
  }

  doLogin() {
    let resp = this.service.login(this.usuarioLogin);
    resp.subscribe({
      next: (token) => this.salvaToken(token),
      error: () => this.message = "Usuário ou senha inválidos"
    }
    );
  }

  clearMessage(){
    this.message = null;
  }


  salvaToken(token: any) {
    this.localStorageService.set("token", token['token']);
    this.jwtService.setToken(token['token']);
    this.router.navigate(['/home']);
  }
  
}
