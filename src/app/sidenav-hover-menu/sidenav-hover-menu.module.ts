import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavHoverMenuComponent } from './sidenav-hover-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavHoverMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidenavHoverMenuComponent
  ]
})
export class SidenavHoverMenuModule { }
