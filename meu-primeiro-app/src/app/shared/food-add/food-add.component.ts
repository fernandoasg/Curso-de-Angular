import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodListService: FoodListService) { }

  inputValue: string = "";

  ngOnInit(): void {
  }

  public addItem(value: string) {
    return this.foodListService.addFood(value).subscribe(
      res => {
        this.foodListService.foodListAlert(res)
        this.inputValue = ""
      },
      error => error
    );
  }
}
