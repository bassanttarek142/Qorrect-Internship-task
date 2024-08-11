import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {
  @Input() sidebar!: SidebarComponent;

  logopath = 'https://qb-qa.qorrect.net/assets/img/logo/logo-desktop.svg';
  imagepath = 'https://preview.redd.it/qjmi4t91fph71.jpg?auto=webp&s=2d77e3eacf0d1e1482fb544a4bb7c06b4c455a60';

  toggleSidebar() {
    if (this.sidebar) {
      this.sidebar.toggleSidebar();
      console.log('Sidebar toggled:', this.sidebar.isOpen);
    } else {
      console.error('Unable to toggle sidebar: Sidebar reference not found');
    }
  }
}
