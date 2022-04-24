import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-diretivas-estruturais></app-diretivas-estruturais>
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
