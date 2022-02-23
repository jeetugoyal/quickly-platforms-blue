import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { HelpComponent } from './help/help.component';

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
  },
  {
    path:'help',
    component : HelpComponent
  },
  {
    path:'refund-policy',
    component : RefundPolicyComponent
  },
  {
    path:'privacy-policy',
    component : PrivacyPolicyComponent
  },
  {
    path:'terms-and-conditions',
    component : TermsAndConditionsComponent
  }

]

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    RefundPolicyComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactUsComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    RefundPolicyComponent,
    HelpComponent
  ]
})
export class MainPagesModule { }
