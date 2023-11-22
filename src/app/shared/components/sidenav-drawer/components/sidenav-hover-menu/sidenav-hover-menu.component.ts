import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NavigationItem } from '../../sidenav-drawer.component';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-sidenav-hover-menu',
    templateUrl: './sidenav-hover-menu.component.html',
    styleUrls: ['./sidenav-hover-menu.component.scss'],
    host: {
        '[class]': 'color ? "sidenav-hover-menu mat-" + color : "sidenav-hover-menu"',
        '[style.top]': 'position.top',
        '[style.bottom]': 'position.bottom',
    },
    standalone: true,
    imports: [NgFor, RouterLinkActive, RouterLink]
})
export class SidenavHoverMenuComponent {
  @Input() color: string = 'primary';
  @Input() children: NavigationItem[] = [];
  @Input() parent!: HTMLDivElement;
  @ViewChild('hoverMenu') hoverMenu!: ElementRef<HTMLDivElement>;
  @Input() parentLabel: string = '';
  private isMenuBelowBottom = false;
  position = { left: 0, top: `0px`, bottom: 'unset'};

  ngAfterViewInit() {
    const hoverMenuRect = this.hoverMenu.nativeElement.getBoundingClientRect();
    const parentRect = this.parent.getBoundingClientRect();

    this.position.left = parentRect.right;
    if (this.position.left + this.parent.offsetWidth > window.innerWidth) {
      this.position.left = window.innerWidth - this.parent.offsetWidth;
    }
    if(hoverMenuRect.bottom > window.innerHeight) {
      this.isMenuBelowBottom = true;
      this.position.top = 'unset';
      // this.position.bottom = '0px';
      // get remain height below the parent rectangle
      const remainHeight = window.innerHeight - parentRect.bottom;
      this.position.bottom = `${0}px`;

    }
  }
}
