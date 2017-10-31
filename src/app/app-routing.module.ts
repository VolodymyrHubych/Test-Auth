import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component'
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Routes,
    RouterModule,
    PreloadAllModules
} from '@angular/router';

import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
     {
      path:'',
      component: HomeComponent, 
      canActivate: [AuthGuard]
    },
    {
        path:"**",
         component: HomeComponent, 
      canActivate: [AuthGuard]
    }
   

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        
    ]
})
export class AppRoutingModule {

}
