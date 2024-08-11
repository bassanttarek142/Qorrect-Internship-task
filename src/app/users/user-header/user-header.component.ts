import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-user-header',
  standalone: true,
  imports:[RouterModule],
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
  userCount = 20904;
  constructor() {
    console.log('UserHeaderComponent instantiated');
  }

  importUsers(): void {
    console.log('Import Users');
  }
}
