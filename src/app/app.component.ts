import { Component, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    private dark: boolean = false;
    title = 'sidenav-example';
    constructor(private renderer: Renderer2) {}

    toggleDarkMode() {
        this.dark = !this.dark;
        this.dark ? this.renderer.addClass(document.body, 'dark') : this.renderer.removeClass(document.body, 'dark');
    }

    getDarkModeIcon() {
        return this.dark ? 'wb_sunny' : 'brightness_3';
    }

    getDarkModeButtonTooltip() {
        return this.dark ? 'Light mode' : 'Dark mode';
    }
}
