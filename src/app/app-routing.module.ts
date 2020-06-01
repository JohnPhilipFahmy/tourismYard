import { SingleTripPageComponent } from './single-trip-page/single-trip-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowitworkComponent } from './howitwork/howitwork.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { HotDealsComponent } from './hot-deals/hot-deals.component';
import { HotOffersComponent } from './hot-offers/hot-offers.component';
import { BestSellingPageComponent } from './best-selling-page/best-selling-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { TravellerPageComponent } from './traveller-page/traveller-page.component';
import { CompanyPageComponent } from './company-page/company-page.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'how-it-work', component: HowitworkComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'hot-offers', component: HotOffersComponent},
  {path: 'best-selling', component: BestSellingPageComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'logIn', component: LoginComponent},
  {path: 'single-trip/:id', component: SingleTripPageComponent},
  {path: 'traveller-Page', component: TravellerPageComponent},
  {path: 'company-page', component: CompanyPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
