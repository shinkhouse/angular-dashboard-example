import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
export type Density = 'comfortable' | 'cozy' | 'compact';
export interface DensityOption {
    value: Density;
    name: string;
    icon: string;
}
@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatMenuModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    private dark: boolean = false;
    public densityOptions: DensityOption[] = [
        { name: 'Comfortable', value: 'comfortable', icon: 'density_large' },
        { name: 'Cozy', value: 'cozy', icon: 'density_medium' },
        { name: 'Compact', value: 'compact', icon: 'density_small' },
    ];
    public density: Density = 'comfortable';
    constructor(private renderer: Renderer2) {
        renderer.addClass(document.body, this.density);
    }

    toggleDarkMode() {
        this.dark = !this.dark;
        this.dark ? this.renderer.addClass(document.body, 'dark') : this.renderer.removeClass(document.body, 'dark');
    }

    getDarkModeIcon() {
        return this.dark ? 'wb_sunny' : 'brightness_3';
    }

    changeDensity(density: Density) {
        this.renderer.removeClass(document.body, this.density);
        this.density = density;
        this.renderer.addClass(document.body, this.density);
    }

    getDarkModeButtonTooltip() {
        return this.dark ? 'Light mode' : 'Dark mode';
    }
}
