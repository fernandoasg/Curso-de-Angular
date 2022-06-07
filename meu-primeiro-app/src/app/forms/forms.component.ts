import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listComidas: Array<{ comida: string, preco: string }> = [
    { comida: "Kafta", preco: "R$10,00"},
    { comida: "Macarrão", preco: "R$13,00"},
    { comida: "Batata recheada", preco: "R$25,00"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
