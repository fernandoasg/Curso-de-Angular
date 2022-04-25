import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string, idade: number}> = [
    { nome: "Fernando", idade: 20 }, 
    { nome: "Craudio", idade: 43 }, 
    { nome: "Jurema", idade: 65 }
  ];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList(): void {
    this.list.push({nome: "Nay", idade: 23})
  }

  public onClickEventList(index: number){
    this.list.splice(index, 1);
  }
}
