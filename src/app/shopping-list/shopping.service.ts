

import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {isNumber} from "util";
export class ShoppingService {

  ingredientAdded = new EventEmitter<Ingredient>();
  // subject created below
  startedEditing = new Subject<number>();
  ingredientChanged = new Subject<Ingredient[]>();
  i = 0;
  found = false;
  private ingredients: Ingredient[] = [
    new Ingredient('Lettuce', 3),
    new Ingredient('Chicken', 5),
    new Ingredient('Butter', 1)
  ];

   getIngredients() {
    return this.ingredients.slice();
  }

   getIngredient(index: number) {
     return this.ingredients[index];

  }

  deleteIngredient(index: number) {
     this.ingredients.splice(index, 1 );
    this.ingredientChanged.next(this.ingredients.slice());
  }
   addIngredient( ingredient: Ingredient) {
     this.i = 0;
      for ( this.i = 0; this.i < this.ingredients.length; this.i++) {
       if ( this.ingredients[this.i].name === ingredient.name) {
         this.ingredients[this.i].amount += ingredient.amount;
         this.found = true;
       }
     }
      if (! this.found) {
      this.ingredients.push(ingredient);
      }
      this.found = false;
    this.ingredientChanged.next(this.ingredients.slice());
  }

   addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient( index: number, ing: Ingredient) {
     this.ingredients[index] = ing;
     this.ingredientChanged.next(this.ingredients.slice());
   }

}

