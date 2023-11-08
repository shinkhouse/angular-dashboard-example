import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
})
export class SidenavItemComponent {
  @Input() label: string = '';
  @Input() isParent: boolean = false; // Determines if the nav item is a parent
  @Input() isLastChild: boolean = false; // Determines if the nav item is the last child
  @Input() isFirstChild: boolean = false; // Determines if the nav item is the last child
  @Input() expanded: boolean = false; // Determines the expanded state
  @Input() icon: string = ''; // Determines the icon

  @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }
}
