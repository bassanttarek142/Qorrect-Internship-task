import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { Router } from '@angular/router';



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
  selector: 'app-activate',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterComponent],
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css'],
})
export class ActivateComponent implements OnInit {
  users: User[] = [
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
      isActive: true,
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
      isActive: true,
    },

  ];

  filteredUsers: User[] = [];
  totalCount = 0;
  filteredCount = 0;
  selectAllChecked = false;
  selectedUsersCount = 0;

  constructor(private router: Router) {}  // Inject Router in the constructor

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
    user.isActive = !user.isActive;
    console.log(user.isActive ? 'Activating user:' : 'Deactivating user:', user);
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

  viewDetails(user: User) {
    console.log('Viewing details for:', user);
    this.router.navigate(['/users/details', user.fullName]);
  }

  editUser(user: User) {
    console.log('Editing user:', user);

    this.router.navigate(['/users/edit', user.fullName]);
  }

  assignEnroll(user: User) {
    console.log('Assigning/enrolling user:', user);
  }

  deactivateSelectedUsers() {
    console.log('Deactivating selected users');
  }

  assignEnrollSelectedUsers() {
    console.log('Assigning/enrolling selected users');
  }
}
