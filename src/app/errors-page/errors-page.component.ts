import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,Data, ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-errors-page',
  standalone: false,
  templateUrl: './errors-page.component.html',
  styleUrl: './errors-page.component.css'
})
export class ErrorsPageComponent implements OnInit {
errorMessage:string ='';
constructor(private route : ActivatedRoute
){}
ngOnInit(){
 this.route.data.subscribe(
    (data:Data)=>{
this.errorMessage=data['message'];
    }
  )
}

}
