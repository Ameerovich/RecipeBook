import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as RecipesActions from './recipes.action';
import * as fromApp from '../../store/app.reducer';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipesEffect {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);
  private store = inject(Store<fromApp.AppState>);

  constructor() {}

  fetchRecipes = createEffect(() => {
    return this.actions$.pipe(
      ofType(RecipesActions.FETCH_RECIPES),
      switchMap(() => {
        return this.http.get<Recipe[]>(
          `${environment.firebaseDatabaseUrl}/recipes.json`
        );
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      map((recipes) => {
        return new RecipesActions.SetRecipes(recipes);
      })
    );
  });

  storeRecipes = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(RecipesActions.STORE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([actionData, recipesState]) => {
          return this.http.put(
            `${environment.firebaseDatabaseUrl}/recipes.json`,
            recipesState.recipes
          );
        })
      );
    },
    { dispatch: false }
  );
}
