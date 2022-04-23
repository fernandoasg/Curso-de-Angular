import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Fernando";
  public idade: number = 29;
  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_zy11.jpg";
  public imgTitle: string = "Naruto";

  public position: {x: number, y: number} = { x: 0, y: 0};

  constructor() { }

  ngOnInit(): void {
  }


  public alertaInfo(valor: MouseEvent): void {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent): void {
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
