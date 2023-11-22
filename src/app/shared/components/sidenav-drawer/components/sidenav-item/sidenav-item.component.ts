import { Component, ElementRef, EventEmitter, Host, Input, Output, ViewChild } from '@angular/core';
import { NavigationItem, SidenavDrawerComponent } from '../../sidenav-drawer.component';
import { SidenavHoverMenuComponent } from '../sidenav-hover-menu/sidenav-hover-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
    selector: 'app-sidenav-item',
    templateUrl: './sidenav-item.component.html',
    styleUrls: ['./sidenav-item.component.scss'],
    host: {
        'class': 'sidenav-item',
        '[class]': 'color ? "sidenav-item mat-" + color : "sidenav-item"',
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
    },
    standalone: true,
    imports: [RouterLinkActive, RouterLink, NgIf, MatIconModule, SidenavHoverMenuComponent]
})
export class SidenavItemComponent {
  @Input() color: string = 'primary';
  @Input() item!: NavigationItem;
  @Input() parentItem!: NavigationItem;
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
  
  constructor(@Host() public sidenav: SidenavDrawerComponent) {}

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

  isItemExpanded(item: NavigationItem): boolean {
    return item && item.hasOwnProperty('expanded') && typeof item.expanded === 'boolean' ? item.expanded : false;
  }
}
