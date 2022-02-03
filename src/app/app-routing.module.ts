import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./main-pages/main-pages.module').then(mainModule => mainModule.MainPagesModule)
  },
  {
    path:'main-pages',
    loadChildren: () => import('./main-pages/main-pages.module').then(mainModule => mainModule.MainPagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
