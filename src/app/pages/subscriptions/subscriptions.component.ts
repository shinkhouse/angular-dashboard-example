import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-subscriptions',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.scss'
})
export class SubscriptionsComponent {
  // create mock data for monthly subscriptions
  public subscriptions = [
    {
      name: 'Netflix',
      amount: 12.99,
      date: '2021-10-01',
      color: 'red'
    },
    {
      name: 'Spotify',
      amount: 9.99,
      date: '2021-10-01',
      color: 'blue'
    },
    {
      name: 'Hulu',
      amount: 5.99,
      date: '2021-10-01',
      color: 'green'
    },
    {
      name: 'Apple Music',
      amount: 9.99,
      date: '2021-10-01',
      color: 'orange'
    },
    {
      name: 'YouTube Premium',
      amount: 11.99,
      date: '2021-10-01',
      color: 'purple'
    },
    {
      name: 'Amazon Prime',
      amount: 12.99,
      date: '2021-10-01',
      color: 'yellow'
    },
    {
      name: 'Adobe Creative Cloud',
      amount: 52.99,
      date: '2021-10-01',
      color: 'cyan'
    },
    {
      name: 'Microsoft Office',
      amount: 6.99,
      date: '2021-10-01',
      color: 'gray'
    }
  ];

  // create array of keys from subscriptions object
  public displayedColumns = Object.keys(this.subscriptions[0]).filter((key) => key !== 'color');
}
