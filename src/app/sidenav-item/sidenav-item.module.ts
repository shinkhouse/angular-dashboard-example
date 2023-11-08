import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavItemComponent } from './sidenav-item.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SidenavItemComponent],
  imports: [CommonModule, MatIconModule],
  exports: [SidenavItemComponent],
})
export class SidenavItemModule {}
