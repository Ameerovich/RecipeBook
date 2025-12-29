import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AlertComponent } from "./alert/alert.component";
import { DropDownDirective } from "./drop-down.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
@NgModule({
 declarations: [
    DropDownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
  //  EditRecipeComponent
   
  ],
  imports: [
    CommonModule
    ],
    exports:[
          DropDownDirective,
          LoadingSpinnerComponent,
          AlertComponent,
          CommonModule
    ]

})
export class SharedModule{}