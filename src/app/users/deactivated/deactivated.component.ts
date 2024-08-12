import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-deactivate',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterComponent],
  templateUrl: './deactivated.component.html',
  styleUrls: ['./deactivated.component.css'],
})
export class DeactivatedComponent implements OnInit {
  users = [
    {
      fullName: 'student two',
      email: 'student2@xyz.com',
      mobileNumber: null,
      gender: 1,
      roles: ['1 Role'],
      lastLogin: null,
      isVerified: false,
      selected: false,
      showMenu: false,
      initials: 'ST',
      bgColor: '#F0DD7E',
      isActive: false, // Set to false for deactivated users
    },
    {
      fullName: 'salah examinee',
      email: 'examinee5@salah.com',
      mobileNumber: null,
      gender: 1,
      roles: ['1 Role'],
      lastLogin: null,
      isVerified: false,
      selected: false,
      showMenu: false,
      initials: 'SE',
      bgColor: '#007bff',
      isActive: false, // Set to false for deactivated users
    },
    // More users...
  ];
  selectAllChecked = false;
  selectedUsersCount = 0; // To keep track of selected users

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

  toggleActivation(user: any) {
    user.isActive = true; // Only activation is allowed
    console.log('Activating user:', user);
  }

  toggleSelectAll(event: any) {
    this.selectAllChecked = event.target.checked;
    this.users.forEach((user) => (user.selected = this.selectAllChecked));
    this.checkSelection(); // Update selection count
  }

  checkSelection() {
    const selectedUsers = this.users.filter((user) => user.selected);
    this.selectedUsersCount = selectedUsers.length;
  }
}
