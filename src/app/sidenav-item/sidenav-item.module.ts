import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavItemComponent } from './sidenav-item.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SidenavHoverMenuModule } from '../sidenav-hover-menu/sidenav-hover-menu.module';

@NgModule({
  declarations: [SidenavItemComponent],
  imports: [CommonModule, MatIconModule, RouterModule, SidenavHoverMenuModule],
  exports: [SidenavItemComponent],
})
export class SidenavItemModule {}
