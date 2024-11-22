import { FeedbackComponent } from './feedback/feedback.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { GassComponent } from './gass/gass.component';
import path from 'path';
import { CartComponent } from './cart/cart.component';
import { NewsComponent } from './news/news.component';

export const routes: Routes = [
  {path:  'home', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'map', component: MapComponent},
  {path:'gass',component:GassComponent},
  {path:'news', component: NewsComponent},
  {path: 'cart', component: CartComponent},
  {path:'feedback',component:FeedbackComponent},
  {path: '**',redirectTo: 'home' }

];
