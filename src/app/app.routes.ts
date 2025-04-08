import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LocationComponent } from './pages/location/location.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "location",
    component: LocationComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];
