import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidenavDrawerComponent } from './shared/components/sidenav-drawer/sidenav-drawer.component';
import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [SidenavDrawerComponent, HeaderComponent, RouterOutlet],
})
export class AppComponent {
    constructor() {}
}
