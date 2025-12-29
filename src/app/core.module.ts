import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";



@NgModule({

providers:[
   
        provideHttpClient(withInterceptorsFromDi()),
        {provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptorService,
          multi:true
        }
]

})
export class CoreModule {}