import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SidenavItemComponent } from './sidenav-drawer/components/sidenav-item/sidenav-item.component';
import { SidenavDrawerComponent } from './sidenav-drawer/sidenav-drawer.component';

const routes: Routes = [{ path: '**', component: AppComponent, children: [
  { path: '**', component: AppComponent}
] }];
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


