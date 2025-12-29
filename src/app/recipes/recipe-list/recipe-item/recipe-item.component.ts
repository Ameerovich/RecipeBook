import { Component,Input, OnInit, ViewChild} from '@angular/core';
import { Recipe } from '../../recipe.model';



@Component({
  selector: 'app-recipe-item',
  standalone: false,
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
@ Input () recipeItem : Recipe ;

@ Input() recipeItemId : number;
}
