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

  constructor() { }

  ngOnInit(): void {
  }

}
