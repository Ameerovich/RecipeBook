import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ErrorsPageComponent } from './errors-page/errors-page.component';
import { DefaultDetailsComponent } from './recipes/default-details/default-details.component';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

import { appReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';
import { RecipesEffect } from './recipes/store/recipes.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorsPageComponent,
    DefaultDetailsComponent,   
   
  
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects,RecipesEffect]),
    SharedModule,
    CoreModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
