import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [RouterModule , CommonModule],
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
  userCount = 20904;
  showTabs = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showTabs = !this.router.url.includes('create-user');
    });
  }

  importUsers(): void {
    console.log('Import Users');
  }
}
