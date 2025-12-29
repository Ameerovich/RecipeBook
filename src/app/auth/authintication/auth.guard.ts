import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,Router,RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../auth.service";
import { Observable,take,map} from "rxjs";
import { Store } from "@ngrx/store";
import * as fromApp from "../../store/app.reducer";

@Injectable({providedIn:'root'})
export class AuthGaurd implements CanActivate{
    constructor(private authService: AuthService,
        private router:Router,
        private store: Store<fromApp.AppState>
    ){}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
 boolean | UrlTree
  | Promise<boolean| UrlTree>
  |Observable<boolean | UrlTree> {
 return this.store.select('auth').pipe(take(1),map(authState=>{
    const user = authState.user;
    const isAuth = !!user;
    if(isAuth){
        return true;
    }
        return this.router.createUrlTree(['/auth']);
 }));   
}
}