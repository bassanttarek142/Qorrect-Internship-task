import { CommonModule } from '@angular/common';
import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isOpen = false;
  private isMouseOver = false;
  private isExplicitlyToggled = false;

  // Toggle sidebar on menu click
  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.isExplicitlyToggled = this.isOpen; // Update explicitly toggled state
  }

  // Expand sidebar on mouse over
  @HostListener('mouseover')
  onMouseOver() {
    this.isMouseOver = true;
    this.isOpen = true;
  }

  // Collapse sidebar on mouse out if it wasn't explicitly opened by clicking
  @HostListener('mouseout')
  onMouseOut() {
    this.isMouseOver = false;
    // Collapse only if it wasn't explicitly toggled open
    setTimeout(() => {
      if (!this.isMouseOver && !this.isExplicitlyToggled) {
        this.isOpen = false;
      }
    }, 100); // Small delay to avoid immediate collapse
  }
}
