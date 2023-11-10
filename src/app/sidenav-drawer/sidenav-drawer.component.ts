import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

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
      state(
        'collapse',
        style({ height: '0px', minHeight: 'unset', overflow: 'hidden' })
      ),
      state('expand', style({ height: '*', overflow: 'hidden' })),
      transition(
        'expand <=> collapse',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class SidenavDrawerComponent implements OnInit {
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
      label: 'Contacts',
      icon: 'contacts',
      route: '/contacts',
    },
    {
      id: 3,
      label: 'Sales',
      icon: 'shopping_cart',
      route: '/sales',
    },
    {
      id: 4,
      label: 'Purchasing',
      icon: 'shopping_bag',
      route: '/purchasing',
    },
    {
      id: 5,
      label: 'Settings',
      icon: 'settings',
      route: '/settings',
    },
    {
      id: 6,
      label: 'Reports',
      icon: 'bar_chart',
      route: '/reports',
    },
    {
      id: 7,
      label: 'Notifications',
      icon: 'notifications',
      route: '/notifications',
    },
    {
      id: 8,
      label: 'Users',
      icon: 'people',
      route: '/users',
    },
    {
      id: 9,
      label: 'Products',
      icon: 'inventory',
      route: '/products',
    },
    {
      id: 10,
      label: 'Orders',
      icon: 'shopping_cart',
      route: '/orders',
    },
    {
      id: 11,
      label: 'Inventory',
      icon: 'inventory_2',
      route: '/inventory',
    },
    {
      id: 12,
      label: 'Analytics',
      icon: 'analytics',
      route: '/analytics',
    },
    {
      id: 13,
      label: 'Support',
      icon: 'support_agent',
      route: '/support',
      children: [
        {
          id: 30,
          label: 'View Tickets',
          icon: 'list',
          route: '/support/tickets',
        },
        {
          id: 31,
          label: 'New Ticket',
          icon: 'add',
          route: '/support/new',
        },
      ],
    },
    {
      id: 14,
      label: 'Tasks',
      icon: 'assignment',
      route: '/tasks',
    },
    {
      id: 15,
      label: 'Calendar',
      icon: 'event',
      route: '/calendar',
    },
    {
      id: 16,
      label: 'Messages',
      icon: 'message',
      route: '/messages',
    },
    {
      id: 17,
      label: 'Invoices',
      icon: 'receipt',
      route: '/invoices',
      children: [
        {
          id: 32,
          label: 'View Invoices',
          icon: 'list',
          route: '/invoices/view',
        },
        {
          id: 33,
          label: 'Create Invoice',
          icon: 'add',
          route: '/invoices/create',
        },
      ],
    },
    {
      id: 18,
      label: 'Documents',
      icon: 'description',
      route: '/documents',
    },
    {
      id: 19,
      label: 'Payments',
      icon: 'payment',
      route: '/payments',
    },
    {
      id: 20,
      label: 'Log Out',
      icon: 'exit_to_app',
      route: '/logout',
    },
  ];

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
    this.navItems[2].children = [
      {
        id: 24,
        label: 'View Sales',
        icon: 'list',
        route: '/sales/view',
      },
      {
        id: 25,
        label: 'Create Sale',
        icon: 'add_shopping_cart',
        route: '/sales/create',
      },
    ];

    this.navItems[3].children = [
      {
        id: 26,
        label: 'View Purchases',
        icon: 'list',
        route: '/purchasing/view',
      },
      {
        id: 27,
        label: 'New Purchase',
        icon: 'add_shopping_cart',
        route: '/purchasing/new',
      },
    ];

    this.navItems[4].children = [
      {
        id: 28,
        label: 'General Settings',
        icon: 'settings',
        route: '/settings/general',
      },
      {
        id: 29,
        label: 'Account Settings',
        icon: 'account_circle',
        route: '/settings/account',
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
