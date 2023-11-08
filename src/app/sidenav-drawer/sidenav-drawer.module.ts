import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavDrawerComponent } from './sidenav-drawer.component';
import { SidenavItemModule } from '../sidenav-item/sidenav-item.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [SidenavDrawerComponent],
  imports: [CommonModule, SidenavItemModule, BrowserAnimationsModule],
  exports: [SidenavDrawerComponent],
})
export class SidenavDrawerModule {}
