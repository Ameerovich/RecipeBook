import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurd } from '../auth/authintication/auth.guard';
import { DefaultDetailsComponent } from './default-details/default-details.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipe-resolver.service';
import { RecipesComponent } from './recipes.component';


const routes: Routes = [
  {path: '',component: RecipesComponent,
    canActivate:[AuthGaurd],
    children:[
    {path: 'new',component:RecipeEditComponent},
    {path:':id',component: RecipeDetailComponent, resolve:[RecipeResolverService]},
   {path: ':id/edit',component:RecipeEditComponent, resolve:[RecipeResolverService]},
   {path: '',component: DefaultDetailsComponent}
  ]
   },

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
