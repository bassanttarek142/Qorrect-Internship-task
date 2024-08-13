import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  menuOpen = false;

  @Output() menuToggled: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log('MenuComponent initialized');
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log('Menu toggled:', this.menuOpen);
    this.menuToggled.emit(this.menuOpen);
  }
}
