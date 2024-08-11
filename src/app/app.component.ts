import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './core/site-header/site-header.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Qorrect-Internship-task';
}
