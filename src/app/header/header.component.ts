import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import { map } from 'rxjs';
import * as RecipesActions from '../recipes/store/recipes.action';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
//@ViewChild('Recipe') recipe: ElementRef;
//@Output () choosenNav=new EventEmitter<string>();
choosenroute:string;
isAuthenticated : boolean=false;

constructor(
  private store: Store<fromApp.AppState>
){}
ngOnInit(): void {

  this.store.select('auth').pipe(map(authState=>authState.user)).subscribe(user=>{
      this.isAuthenticated=!!user;
  })
}

onlogout(){
  this.store.dispatch(new AuthActions.Logout());
}

// onSelect(selected : string){
//   this.choosenroute=selected;
//   this.router.navigate([this.choosenroute]);
// }
onSaveData(){
    // this.dataStorageService.onStoreData();
    this.store.dispatch(new RecipesActions.StoreRecipes());
}
onFetchData(){
  // this.dataStorageService.onGetData().subscribe();
  this,this.store.dispatch(new RecipesActions.FetchRecipes());
}
}
