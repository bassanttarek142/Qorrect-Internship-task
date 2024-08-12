import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';


interface User {
  fullName: string;
  email: string;
  mobileNumber: string | null;
  gender: number;
  roles: string[];
  lastLogin: string | null;
  isVerified: boolean;
  selected: boolean;
  showMenu: boolean;
  initials: string;
  bgColor: string;
  isActive: boolean;
}

@Component({
  selector: 'app-deactivate',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterComponent],
  templateUrl: './deactivated.component.html',
  styleUrls: ['./deactivated.component.css'],
})
export class DeactivatedComponent implements OnInit {
  users: User[] = [
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
      isActive: false,
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
      isActive: false,
    },

  ];

  filteredUsers: User[] = [];
  totalCount = 0;
  filteredCount = 0;
  selectAllChecked = false;
  selectedUsersCount = 0;

  ngOnInit() {
    this.filteredUsers = this.users.map((user) => ({
      ...user,
      initials: this.getInitials(user.fullName),
      bgColor: user.bgColor || this.getRandomColor(),
    }));
    this.totalCount = this.users.length;
    this.filteredCount = this.totalCount;
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
    user.isActive = true;
    console.log('Activating user:', user);
  }

  toggleSelectAll(event: any) {
    this.selectAllChecked = event.target.checked;
    this.filteredUsers.forEach((user) => (user.selected = this.selectAllChecked));
    this.checkSelection();
  }

  checkSelection() {
    const selectedUsers = this.filteredUsers.filter((user) => user.selected);
    this.selectedUsersCount = selectedUsers.length;
  }

  onFilterChange(filters: any): void {
    this.filteredUsers = this.users.filter((user) => {
      const matchesSearch =
        !filters.search ||
        user.fullName.toLowerCase().includes(filters.search.toLowerCase()) ||
        user.email.toLowerCase().includes(filters.search.toLowerCase());
      const matchesGender =
        !filters.gender || (filters.gender === 'male' && user.gender === 1) || (filters.gender === 'female' && user.gender === 2);
      const matchesRole =
        !filters.role || user.roles.includes(filters.role);
      const matchesStatus =
        !filters.status || (filters.status === 'verified' && user.isVerified) || (filters.status === 'not-verified' && !user.isVerified);

      return matchesSearch && matchesGender && matchesRole && matchesStatus;
    });

    this.filteredCount = this.filteredUsers.length;
  }
}
