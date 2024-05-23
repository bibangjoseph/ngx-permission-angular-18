import { Component } from '@angular/core';
import {NgxPermissionsModule} from "ngx-permissions";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxPermissionsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
