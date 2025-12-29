import { NgModule } from "@angular/core";
import { AuthinticationComponent } from "./authintication/authintication.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';


@NgModule({
    
    declarations:[ AuthinticationComponent],

     imports:[
    FormsModule,
  SharedModule,
    RouterModule.forChild([{path:'',component:AuthinticationComponent}]),
    StoreModule.forFeature('auth', fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects])
   ]
})
export class AuthModule{}

