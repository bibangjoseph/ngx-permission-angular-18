import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListComponent} from "./list/list.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];
