import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavDrawerComponent } from './sidenav-drawer.component';
import { SidenavItemModule } from '../sidenav-item/sidenav-item.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidenavDrawerComponent],
  imports: [CommonModule, SidenavItemModule, BrowserAnimationsModule, MatSidenavModule, MatButtonModule, MatListModule, RouterModule],
  exports: [SidenavDrawerComponent],
})
export class SidenavDrawerModule {}
