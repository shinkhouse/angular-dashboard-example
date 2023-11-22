import { Component, EventEmitter, Host, Input, OnInit, Output } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { SidenavItemComponent } from './components/sidenav-item/sidenav-item.component';
import { NgIf, NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface NavigationItem {
  id: number;
  label: string;
  icon: string;
  route: string; // Optional route
  expanded?: boolean;
  children?: NavigationItem[]; // Optional children
}
@Component({
    selector: 'app-sidenav-drawer',
    templateUrl: './sidenav-drawer.component.html',
    styleUrls: ['./sidenav-drawer.component.scss'],
    animations: [
        trigger('expandCollapseHeightState', [
            state('collapse', style({ height: '0px', minHeight: 'unset', overflow: 'hidden' })),
            state('expand', style({ height: '*', overflow: 'hidden' })),
            transition('expand <=> collapse', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
    standalone: true,
    imports: [
        MatIconModule,
        NgIf,
        NgFor,
        SidenavItemComponent,
    ],
})
export class SidenavDrawerComponent implements OnInit {
  @Input() color: string = 'primary';
  hoverMenuTimeout: any;
  public isClosed: boolean = true;
  public navItems: NavigationItem[] = [
    {
      id: 1,
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard',
    },
    {
      id: 2,
      label: 'Accounts',
      icon: 'credit_card',
      route: '/accounts',
    },
    {
      id: 3,
      label: 'Transactions',
      icon: 'receipt',
      route: '/transactions',
    },
    {
      id: 4,
      label: 'Investments',
      icon: 'savings',
      route: '/investments',
    },
    {
      id: 5,
      label: 'Subscriptions',
      icon: 'subscriptions',
      route: '/subscriptions',
    },
    {
      id: 5,
      label: 'Categories',
      icon: 'bookmarks',
      route: '/categories',
    },
    {
      id: 5,
      label: 'Settings',
      icon: 'settings',
      route: '/settings',
    },
  ];

  constructor() {}

  // Adding children to some of the navigation items
  ngOnInit(): void {
    this.navItems[1].children = [
      {
        id: 21,
        label: 'View Contacts',
        icon: 'list',
        route: '/contacts/view',
      },
      {
        id: 22,
        label: 'Add Contact',
        icon: 'person_add',
        route: '/contacts/add',
      },
      {
        id: 23,
        label: 'Edit Contact',
        icon: 'edit',
        route: '/contacts/edit',
      },
    ];
  }

  toggleDrawerExpansion() {
    this.isClosed = !this.isClosed;
    if(this.isClosed) {
      this.navItems.forEach((item) => {
        item.expanded = false;
      });
    }
  }

  toggleItemExpansion(item: any) {
    if (!this.isClosed && item.children && item.children.length > 0) {
      item.expanded = !item.expanded;
    }
  }
}
