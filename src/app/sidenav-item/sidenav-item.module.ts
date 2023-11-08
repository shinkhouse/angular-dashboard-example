import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavItemComponent } from './sidenav-item.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidenavItemComponent],
  imports: [CommonModule, MatIconModule, RouterModule],
  exports: [SidenavItemComponent],
})
export class SidenavItemModule {}
