import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }


  getUsers(){
    this.http.get('http://localhost:8080/users').subscribe(
      (data) => this.users = data
    ).unsubscribe();
  
  };
}
