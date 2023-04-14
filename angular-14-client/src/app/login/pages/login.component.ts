import {AuthService} from '../../auth/auth.service';
import {UsuarioLoginDTO} from '../model/usuarioLoginDTO';
import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLoginDTO = {ra : "", password: ""};
  message: any;
  esqueciSenha: boolean = false;


  setEsqueciSenhaTrue(){
    this.esqueciSenha = true;
  }

  constructor(private service: LoginService,
      private router:Router,
      private authService: AuthService,) { }

  ngOnInit() {
    this.authService.handleLogout();
  }

  doLogin() {
    let resp = this.service.login(this.usuarioLogin);
    resp.subscribe({
      next: (response) => this.salvaToken(response),
      error: () => this.message = "Usuário ou senha inválidos"
    }
    );
  }

  clearMessage(){
    this.message = null;
  }


  salvaToken(response: any) {
    this.authService.handleLogin(response);
    this.router.navigate(['/']);
  }
}
