import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-drawer',
  templateUrl: './sidenav-drawer.component.html',
  styleUrls: ['./sidenav-drawer.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed, void', style({height: '0px', visibility: 'hidden'})),
      // Clear the `visibility` while open, otherwise the content will be visible when placed in
      // a parent that's `visibility: hidden`, because `visibility` doesn't apply to descendants
      // that have a `visibility` of their own (see #27436).
      state('expanded', style({height: '*', visibility: ''})),
      transition(
        'expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)'),
      ),
    ]),
  ],
})
export class SidenavDrawerComponent {
  navItems = [
    {
      id: 1,
      label: 'Dashboard',
      icon: 'dashboard_icon',
      expanded: false,
      children: [],
    },
    {
      id: 2,
      label: 'Users',
      icon: 'people',
      expanded: false,
      children: [
        {
          id: 3,
          label: 'Active Users',
          icon: 'user_active_icon',
          route: '/users/active',
        },
        {
          id: 4,
          label: 'Inactive Users',
          icon: 'user_inactive_icon',
          route: '/users/inactive',
        },
      ],
    },
    {
      id: 5,
      label: 'Settings',
      icon: 'settings_icon',
      expanded: false,
      children: [
        {
          id: 6,
          label: 'Profile',
          icon: 'profile_icon',
          route: '/settings/profile',
        },
        {
          id: 7,
          label: 'Account',
          icon: 'account_icon',
          route: '/settings/account',
        },
        {
          id: 8,
          label: 'Preferences',
          icon: 'preferences_icon',
          route: '/settings/preferences',
        },
      ],
    },
    {
      id: 9,
      label: 'Reports',
      icon: 'reports_icon',
      expanded: false,
      children: [
        {
          id: 10,
          label: 'Sales',
          icon: 'sales_icon',
          route: '/reports/sales',
        },
        {
          id: 11,
          label: 'Expenses',
          icon: 'expenses_icon',
          route: '/reports/expenses',
        },
        {
          id: 12,
          label: 'Profit & Loss',
          icon: 'profit_loss_icon',
          route: '/reports/profit-loss',
        },
      ],
    },
  ];

  toggle(item: any) {
    item.expanded = !item.expanded;
  }
}

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';