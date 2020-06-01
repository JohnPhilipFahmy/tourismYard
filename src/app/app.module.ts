import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
// Ngx-Bootstrap Modules
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { SearchComponent } from './search/search.component';
import { from } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
import { HotDealsTripComponent } from './hot-deals-trip/hot-deals-trip.component';
import { HotDealsComponent } from './hot-deals/hot-deals.component';
import { BestSellingTripComponent } from './best-selling-trip/best-selling-trip.component';
import { BestSellingComponent } from './best-selling/best-selling.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { SearchSlideComponent } from './search-slide/search-slide.component';
import { TripInformationComponent } from './trip-information/trip-information.component';
import { SrearchRatingComponent } from './srearch-rating/srearch-rating.component';
import { SingleTripBarComponent } from './single-trip-bar/single-trip-bar.component';
import { SingleTripSliderComponent } from './single-trip-slider/single-trip-slider.component';
import { SingleTripDetailsComponent } from './single-trip-details/single-trip-details.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonPageBodyComponent } from './person-page-body/person-page-body.component';
import { CompareTableComponent } from './compare-table/compare-table.component';
import { CompanyCardComponent } from './company-card/company-card.component';
import { CompanyPageBodyComponent } from './company-page-body/company-page-body.component';
import { TripFormDescriptionComponent } from './trip-form-description/trip-form-description.component';
import { TripFormAvailableDatesComponent } from './trip-form-available-dates/trip-form-available-dates.component';
import { HomeComponent } from './home/home.component';
import { HowitworkComponent } from './howitwork/howitwork.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SingleTripPageComponent } from './single-trip-page/single-trip-page.component';
import { HotOffersComponent } from './hot-offers/hot-offers.component';
import { BestSellingPageComponent } from './best-selling-page/best-selling-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TravellerPageComponent } from './traveller-page/traveller-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    SearchComponent,
    FooterComponent,
    HotDealsTripComponent,
    HotDealsComponent,
    BestSellingTripComponent,
    BestSellingComponent,
    BlogComponent,
    BlogPostComponent,
    SearchSlideComponent,
    TripInformationComponent,
    SrearchRatingComponent,
    SingleTripBarComponent,
    SingleTripSliderComponent,
    SingleTripDetailsComponent,
    PersonCardComponent,
    PersonPageBodyComponent,
    CompareTableComponent,
    CompanyCardComponent,
    CompanyPageBodyComponent,
    TripFormDescriptionComponent,
    TripFormAvailableDatesComponent,
    HomeComponent,
    HowitworkComponent,
    BlogPageComponent,
    SearchPageComponent,
    SingleTripPageComponent,
    HotOffersComponent,
    BestSellingPageComponent,
    LoginComponent,
    SignUpComponent,
    TravellerPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    RatingModule.forRoot(),
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
