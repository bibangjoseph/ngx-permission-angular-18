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
  title = 'ng18';
  permissions = ['ADMIN', 'GUEST'];

  ngxPermission = inject(NgxPermissionsService);

  ngOnInit() {
    this.ngxPermission.loadPermissions(this.permissions);
  }
}
