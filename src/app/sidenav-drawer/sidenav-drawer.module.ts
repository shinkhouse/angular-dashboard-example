import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavDrawerComponent } from './sidenav-drawer.component';
import { SidenavItemModule } from '../sidenav-item/sidenav-item.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { SidenavHoverMenuModule } from '../sidenav-hover-menu/sidenav-hover-menu.module';

@NgModule({
  declarations: [SidenavDrawerComponent],
  imports: [CommonModule, SidenavItemModule, BrowserAnimationsModule, RouterModule, MatButtonModule, MatIconModule, SidenavHoverMenuModule],
  exports: [SidenavDrawerComponent],
})
export class SidenavDrawerModule {}
