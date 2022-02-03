import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'home',
    component : HomeComponent
  },
  {
    path:'about-us',
    component : AboutUsComponent
  },
  {
    path:'services',
    component : ServicesComponent
  },
  {
    path:'contact-us',
    component : ContactUsComponent
  }

]

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactUsComponent
  ]
})
export class MainPagesModule { }
