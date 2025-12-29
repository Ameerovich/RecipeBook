import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as shoppingListActions from '../store/shopping-list.actions';

import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  standalone: false,
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
subscription : Subscription;
// editingItemIndex: number;
editMode : boolean = false;
editedItem : Ingredient;
@ViewChild ('f') slForm : NgForm;

constructor(
  private store : Store<fromApp.AppState>
){}

ngOnInit(): void {

  this.subscription= this.store.select('shoppingList').subscribe(stateData=>{
    if(stateData.editedIngredientIndex>-1){
      this.editMode=true;
      this.editedItem=stateData.editedIngredient;
     
      this.slForm.setValue({
      name: this.editedItem.name,
      amount : this.editedItem.amount
    })
    }
    else{
      this.editMode=false;
    }
  });
}


onAdd(form : NgForm){
  const name=form.value.name;
  const amount= form.value.amount;
  const newIngredient= new Ingredient(name,amount);
  if(this.editMode){
  
    this.store.dispatch(new shoppingListActions.UpdateIngredient(newIngredient));
  }else 

  this.store.dispatch(new shoppingListActions.AddIngredient(newIngredient));
  this.slForm.reset();
  this.editMode=false; 
}
onClear(){
  this.slForm.reset();
  this.editMode=false;
  this.store.dispatch(new shoppingListActions.StoptEditing());
}
onDelete(){
  // this.shoppingListService.deleteIngredient(this.editingItemIndex);
  this.store.dispatch(new shoppingListActions.DeleteIngredient());
  this.onClear();
  
  
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
  this.store.dispatch(new shoppingListActions.StoptEditing());
}
}
