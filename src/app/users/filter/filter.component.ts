import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports : [CommonModule , FormsModule] ,
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  filters = {
    search: '',
    gender: '',
    role: '',
    status: ''
  };
  filteredCount = 0;
  totalCount = 20921;

  @Output() filterChange = new EventEmitter<any>();

  onFilterChange(): void {
    this.filterChange.emit(this.filters);
  }

  clearFilters(): void {
    this.filters = {
      search: '',
      gender: '',
      role: '',
      status: ''
    };
    this.onFilterChange();
  }

  get isClearEnabled(): boolean {
    return !!this.filters.search || !!this.filters.gender || !!this.filters.role || !!this.filters.status;
  }
}
