import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;

  public heigth: string = "20px";
  public backgroundColor: string = "purple";

  public nome:string = "";
  public list: Array<{nome: string}> = [];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.valor){
        this.valor = false;
      } else {
        this.valor = true;
      }

      if (this.heigth == "20px") {
        this.heigth = "50px";
        this.backgroundColor = "black";
      } else {
        this.heigth = "20px";
        this.backgroundColor = "purple";
      }
    }, 2000);
  }

  public salvar(): void {
    this.list.push({ nome: this.nome });
    this.nome = "";
  }

}
