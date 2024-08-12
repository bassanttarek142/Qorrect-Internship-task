import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-activate',
  standalone: true,
  imports: [CommonModule, FormsModule , FilterComponent],
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css'],
})
export class ActivateComponent implements OnInit {
  users = [
    {
      fullName: 'examinee-20 112',
      email: 'examinee-20@gmail.com',
      mobileNumber: null,
      gender: 1,
      roles: ['1 Role'],
      lastLogin: null,
      isVerified: false,
      selected: false,
      showMenu: false,
      initials: 'E1',
      bgColor: '#F0DD7E',
      isActive: true, // Used for Activate/Deactivate actions
    },
    {
      fullName: 'examinee-19 112',
      email: 'examinee-19@gmail.com',
      mobileNumber: null,
      gender: 1,
      roles: ['1 Role'],
      lastLogin: null,
      isVerified: false,
      selected: false,
      showMenu: false,
      initials: 'E1',
      bgColor: '#007bff',
      isActive: true, // Used for Activate/Deactivate actions
    },
    // More users...
  ];
  selectAllChecked = false;
  mainMenuActive = false;
  selectedUsersCount = 0;

  ngOnInit() {
    this.users = this.users.map((user) => ({
      ...user,
      initials: this.getInitials(user.fullName),
      bgColor: user.bgColor || this.getRandomColor(),
    }));
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  getRandomColor(): string {
    const colors = [
      '#ffadad',
      '#ffd6a5',
      '#fdffb6',
      '#caffbf',
      '#9bf6ff',
      '#a0c4ff',
      '#bdb2ff',
      '#ffc6ff',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  toggleMenu(user: any) {
    user.showMenu = !user.showMenu;
  }

  toggleMainMenu() {
    this.mainMenuActive = !this.mainMenuActive;
  }

  viewDetails(user: any) {
    console.log('Viewing details for:', user);
  }

  editUser(user: any) {
    console.log('Editing user:', user);
  }

  assignEnroll(user: any) {
    console.log('Assigning/enrolling user:', user);
  }

  toggleActivation(user: any) {
    user.isActive = !user.isActive;
    console.log(user.isActive ? 'Activating user:' : 'Deactivating user:', user);
  }

  toggleSelectAll(event: any) {
    this.selectAllChecked = event.target.checked;
    this.users.forEach((user) => (user.selected = this.selectAllChecked));
    this.checkSelection();
  }

  checkSelection() {
    const selectedUsers = this.users.filter((user) => user.selected);
    this.selectedUsersCount = selectedUsers.length;
  }

  unselectAll() {
    this.selectAllChecked = false;
    this.users.forEach((user) => (user.selected = false));
    this.selectedUsersCount = 0;
  }

  deactivateSelectedUsers() {
    console.log('Deactivating selected users');
  }

  assignEnrollSelectedUsers() {
    console.log('Assigning/enrolling selected users');
  }
}
