import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
selector:'[appdropDown]',
standalone:false
})

export class DropDownDirective {
@HostBinding('class.open') isOpen:boolean=false;
@HostListener('click') clicked(event:Event){
    this.isOpen=!this.isOpen;
}
}