import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.getList().subscribe(
      res => this.foodList = res,
      error => error
    );

    this.foodListService.emitEvent.subscribe(
      res => {
        return this.foodList.push(res);
      }
    );
  }

  public editFoodItem(id: number, value: string) {
    this.foodListService.editFood(id, value).subscribe(
      res => {
        return console.log(res)
      },
      error => error
    )
  }

  public deleteFood(id: number) {
    return this.foodListService.deleteFood(id).subscribe(
      res => {
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id
          }
        )
      },
      error => error
    )
  }

}
