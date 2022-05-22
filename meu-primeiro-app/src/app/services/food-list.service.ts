import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "Soba",
    "Arroz",
    "Ovo"
  ];

  constructor() { }

  public getList() {
    return this.list;
  }

  public addFood(value: string) {
    return this.list.push(value);
  }
}
