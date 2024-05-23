import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgxPermissionsService} from "ngx-permissions";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // Define the permissions for the application
  permissions = ['ADMIN',];

  // Inject the NgxPermissionsService
  ngxPermission = inject(NgxPermissionsService);

  ngOnInit() {

    // Load the permissions
    this.ngxPermission.loadPermissions(this.permissions);
  }
}
