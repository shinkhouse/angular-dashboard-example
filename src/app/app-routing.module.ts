import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidenavItemComponent } from './shared/components/sidenav-drawer/components/sidenav-item/sidenav-item.component';
import { SidenavDrawerComponent } from './shared/components/sidenav-drawer/sidenav-drawer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'accounts', component: AccountsComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'investments', component: InvestmentsComponent},
  { path: 'subscriptions', component: SubscriptionsComponent},
  { path: 'transactions', component: TransactionsComponent},
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `dashboard` by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


