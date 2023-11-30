import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'accounts', loadComponent: () => import('./pages/accounts/accounts.component').then(m => m.AccountsComponent) },
  { path: 'categories', loadComponent: () => import('./pages/categories/categories.component').then(m => m.CategoriesComponent) },
  { path: 'investments', loadComponent: () => import('./pages/investments/investments.component').then(m => m.InvestmentsComponent) },
  { path: 'subscriptions', loadComponent: () => import('./pages/subscriptions/subscriptions.component').then(m => m.SubscriptionsComponent) },
  { path: 'transactions', loadComponent: () => import('./pages/transactions/transactions.component').then(m => m.TransactionsComponent) },
  { path: 'settings', loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `dashboard` by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


