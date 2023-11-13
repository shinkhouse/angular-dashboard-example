import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidenavDrawerComponent } from './sidenav-drawer/sidenav-drawer.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [SidenavDrawerComponent, HeaderComponent],
})
export class AppComponent {
    constructor() {}
}
