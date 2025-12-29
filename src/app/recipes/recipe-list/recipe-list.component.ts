import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit , OnDestroy{
  subscription : Subscription;
recipes : Recipe[];
constructor(
   private route: ActivatedRoute,
    private router:Router,
  private store : Store<fromApp.AppState>){
}
ngOnInit(){
  this.subscription= this.store.select('recipes').pipe(
    map((ResState=>
      ResState.recipes
    ))
  ).subscribe(
    (recipes:Recipe[])=>{
      this.recipes=recipes;
    }
  )


}
onAddNewRecipe(){
this.router.navigate(['new'],{relativeTo:this.route});
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
