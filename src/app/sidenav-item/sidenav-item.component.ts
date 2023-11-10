import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NavigationItem } from '../sidenav-drawer/sidenav-drawer.component';

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
    '[class.drawer-closed]': '!drawerOpen',
    '(click)': 'onToggle()',
    '[routerLinkActiveOptions]': "{exact: true}",
    '[routerLinkActive]': "active"
  }
})
export class SidenavItemComponent {
  @Input() item!: NavigationItem;
  @Input() drawerOpen: boolean = true;
  @Input() hasChildren: boolean = false; // Determines if the nav item has children
  @Input() isParent: boolean = false; // Determines if the nav item is a parent
  @Input() isChild: boolean = false; // Determines if the nav item is a child
  @Input() isLastChild: boolean = false; // Determines if the nav item is the last child
  @Input() isFirstChild: boolean = false; // Determines if the nav item is the last child
  @Input() children: NavigationItem[] = [];
  @Output() toggle = new EventEmitter<void>();
  @ViewChild('contentContainer') contentContainer!: HTMLDivElement;
  showHoverMenu = false;
  hoverMenuMousedOver = false;

  onMouseOver() {
    this.showHoverMenu = true;
  }

  onHoverMenuMouseOver() {
    this.hoverMenuMousedOver = true;
  }

  onMouseOut() {
    setTimeout(() => {
      if (!this.hoverMenuMousedOver) {
        this.showHoverMenu = false;
      }
    }, 100);
  }

  onMouseOutHoverMenu() {
    this.onMouseOut();
    if (this.showHoverMenu) {
      this.hoverMenuMousedOver = false;
    }
  }


  onToggle() {
    this.toggle.emit();
  }
}
