import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { Observable} from 'rxjs';
import { Store } from '@ngrx/store';

import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.component.html', 
  styleUrl: './shopping-list.component.css',
 
})
export class ShoppingListComponent implements OnInit, OnDestroy{
ingredients :Observable<{ingredients : Ingredient[]}>;

constructor (
  private store : Store<fromApp.AppState>
){}
 ngOnInit() {
 
 this.ingredients=this.store.select('shoppingList');
 
    }

    ngOnDestroy(): void {
   
     
    }
    onItemEdit(i:number){
     
      this.store.dispatch(new ShoppingListActions.StartEditing(i));
    }
    
 
 }


