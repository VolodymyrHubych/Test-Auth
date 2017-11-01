import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component'
import {ProductsComponent} from './products/products.component'
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
      component: HomeComponent
    },
    {
      path:'products',
      component: ProductsComponent, 
      canActivate: [AuthGuard]
    },
    {
        path:"**",
         redirectTo: ''
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
