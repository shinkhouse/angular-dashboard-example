import { Component, Renderer2, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
export type Density = 'comfortable' | 'cozy' | 'compact';
export interface DensityOption {
    value: Density;
    name: string;
    icon: string;
}
@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatMenuModule, MatAutocompleteModule, MatOptionModule, MatButtonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    public gemstoneProducts = [
        { name: 'Ruby', partNumber: 'RUB-' + Math.floor(Math.random() * 10000) },
        { name: 'Emerald', partNumber: 'EME-' + Math.floor(Math.random() * 10000) },
        { name: 'Sapphire', partNumber: 'SAP-' + Math.floor(Math.random() * 10000) },
        { name: 'Diamond', partNumber: 'DIA-' + Math.floor(Math.random() * 10000) },
    ];

    public salesOrders = Array.from({ length: 3 }, () => 'SO-' + Math.floor(Math.random() * 10000));
    public purchaseOrders = Array.from({ length: 3 }, () => 'PO-' + Math.floor(Math.random() * 10000));
    public invoiceNumbers = Array.from({ length: 3 }, () => 'IN-' + Math.floor(Math.random() * 10000));

    public searchResults = [
        { category: 'Inventory', results: this.gemstoneProducts.map((p) => p.partNumber) },
        { category: 'Sales', results: this.salesOrders },
        { category: 'Purchasing', results: this.purchaseOrders },
        { category: 'Invoices', results: this.invoiceNumbers },
    ];
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
