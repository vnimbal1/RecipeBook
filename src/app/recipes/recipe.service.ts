import { Recipe } from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from '../shopping-list/shopping.service';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

 private recipes: Recipe[] = [

   new Recipe('Macaroni and cheese',
     'Traditional macaroni and cheese is a casserole baked in the oven; however, it may be prepared in a sauce pan on top of the stove or using a packaged mix.',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSsoDcxDNDgjKjkOdxyTEb4GF8er-CvNai64jvjb9XueW3voYD9w' ,
     [new Ingredient ( 'Cheddar' , 1),
       new Ingredient ( 'Cheese' , 1),
       new Ingredient ( 'Macroni' , 2)] ),

   new Recipe('Meatloaf',
     ' Meatloaf is a dish of ground meat mixed with other ingredients, formed into a loaf shape, then baked or smoked. The loaf shape is formed by either cooking it in a loaf pan, or forming it by hand on a flat baking pan.', 'http://assets.epicurious.com/photos/57eab27ecf9338f824b78b4b/master/pass/old-fashioned-meat-loaf.jpg' ,
     [new Ingredient ( 'Ground Meat' , 1),
       new Ingredient ( 'Garlic' , 1),
       new Ingredient ( 'Spices' , 2)] ),

   new Recipe('Hamburger', 'A hamburger or burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, barbecued, or flame broiled.', 'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg',
  [new Ingredient ( 'Ground Meat' , 2),
  new Ingredient ( 'Lettuce' , 1),
  new Ingredient ( 'Mustard' , 1)] ),


  new Recipe('Apple pie', 'An apple pie, regional variation apple tart, is a fruit pie, in which the principal filling ingredient is apple. It is, on occasion, served with whipped cream or ice cream on top, or alongside cheddar cheese. ' ,
  'https://images-gmi-pmc.edge-generalmills.com/83c96245-22eb-4ef1-9446-ef21a746b0a7.jpg ' ,
  [new Ingredient ( 'Apple' , 2),
  new Ingredient ( 'Cinnamon' , 1),
  new Ingredient ( 'Cheese' , 1)] ),


  new Recipe('Chicken Tikka Masala', 'Chicken tikka masala is a dish of chunks of roasted marinated chicken (chicken tikka) in a spiced curry sauce. The sauce is usually creamy and orange-coloured. There are multiple claims to its place of origin, including the Punjab region of the Indian subcontinent and Glasgow in Scotland' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajFDE8Sx7x-AEOCQdoXywGj08Qx8aE1qgduwYTx7WKZK-kBdR' , [new Ingredient ( 'Chicken' , 2) , new Ingredient ( 'Indian Spices' , 1) , new Ingredient('Yogurt', 1) ] ) ,

   new Recipe(' Quesadilla  ', 'A quesadilla  is a tortilla, usually a corn tortilla but also sometimes made with a wheat tortilla, which is filled with cheese and then grilled. Other items, such as a savoury mixture of spices or vegetables, are often added, then they are cooked on a griddle', 'https://cdad5c1a4432622c031d-9e2498b30009308de15a0d52a7422974.ssl.cf1.rackcdn.com/menu/product/chicken-sausage-quesadilla_thumbnaillarge_2017-04-08-22-24-38.jpg', [new Ingredient ( 'wheat tortilla' , 2), new Ingredient ( 'Green Vegetables' , 2)]) ];

 constructor(private shoppingService: ShoppingService) {
  }
  getRecipes() {
  return this.recipes.slice();
  }

  getRecipe(index: number) {
   return this.recipes[index];
  }

  deleteRecope(index: number) {
   this.recipes.splice(index, 1);
   this.recipeChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
  this.shoppingService.addIngredients(ingredients);
  }

  setRecipes(newRecipes: Recipe[]) {
   this.recipes = newRecipes;
   this.recipeChanged.next(this.recipes.slice());
  }

  addRecipe (recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());

  }


}
