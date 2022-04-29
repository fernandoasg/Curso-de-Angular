import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-title *ngIf="destruir"></app-title> -->
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    <!-- <app-diretivas-atributos>
      <h1>Aulas de Diretivas de Atributo</h1>
      <hr/>
    </app-diretivas-atributos> -->
    <app-diretivas-atributos>
    </app-diretivas-atributos>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  
  public valor: number = 1;
  public destruir: boolean = true;

  constructor() { }

  ngOnInit(): void {
    
  }
}
