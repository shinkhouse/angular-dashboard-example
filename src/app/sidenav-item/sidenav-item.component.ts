import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss'],
  host: {
    'class': 'sidenav-item',
    '[class.parent-item]': 'isParent',
    '[class.child-item]': '!isParent',
    '[class.grouped]': 'hasChildren || isChild',
    '[class.expanded]': 'expanded',
    '[class.first-child]': 'isFirstChild',
    '[class.last-child]': 'isLastChild',
    '[class.first]': 'expanded && isParent',
    '(click)': 'onToggle()',
  }
})
export class SidenavItemComponent {
  @Input() drawerOpen: boolean = true;
  @Input() label: string = '';
  @Input() hasChildren: boolean = false; // Determines if the nav item has children
  @Input() isParent: boolean = false; // Determines if the nav item is a parent
  @Input() isChild: boolean = false; // Determines if the nav item is a child
  @Input() isLastChild: boolean = false; // Determines if the nav item is the last child
  @Input() isFirstChild: boolean = false; // Determines if the nav item is the last child
  @Input() expanded: boolean = false; // Determines the expanded state
  @Input() icon: string = ''; // Determines the icon

  @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }
}
