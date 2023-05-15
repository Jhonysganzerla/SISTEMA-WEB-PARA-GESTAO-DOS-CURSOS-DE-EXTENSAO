import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { DashContent } from '../model/dashcontent';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dashContent: DashContent;

  constructor(
    private homeService: HomeService,
  ){}

  ngOnInit() {
    this.dashContent = {turmas:0, cursos : 0, alunos: 0, instrutores:0}

    this.homeService.getDashContent().subscribe((dashContent) => {
      this.dashContent = dashContent;
    });

  }


    
}
