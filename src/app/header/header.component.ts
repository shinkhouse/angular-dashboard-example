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
    public mockSearchData = [
        { id: 346472, companyName: 'Roberts LLC', productName: 'Topaz', dateCreated: '04/01/2023', amount: '963173531.31' },
        { id: 893044, companyName: 'Kovacek Group', productName: 'Amethyst', dateCreated: '02/04/2023', amount: '47296310.89' },
        { id: 299191, companyName: 'Dickinson Inc', productName: 'Emerald', dateCreated: '12/14/2022', amount: '622463461.88' },
        {
            id: 595805,
            companyName: 'Raynor, Jacobs and Harris',
            productName: 'Aquamarine',
            dateCreated: '09/22/2023',
            amount: '619858750.62',
        },
        { id: 151370, companyName: "D'Amore-Kassulke", productName: 'Peridot', dateCreated: '10/18/2023', amount: '473545171.36' },
        { id: 540735, companyName: 'Runte Group', productName: 'diamond', dateCreated: '11/04/2023', amount: '124577471.88' },
        { id: 476420, companyName: 'Hackett-Walker', productName: 'Garnet', dateCreated: '01/22/2023', amount: '149155163.62' },
        {
            id: 455216,
            companyName: 'Huels, Keeling and Schamberger',
            productName: 'Ruby',
            dateCreated: '06/09/2023',
            amount: '770282260.89',
        },
        { id: 956385, companyName: 'Kuhn, Emmerich and Harber', productName: 'Topaz', dateCreated: '05/06/2023', amount: '513664124.39' },
        { id: 610898, companyName: 'Lakin Group', productName: 'Garnet', dateCreated: '10/10/2023', amount: '379226126.84' },
        {
            id: 868658,
            companyName: 'Volkman, Haag and Gerlach',
            productName: 'Aquamarine',
            dateCreated: '05/19/2023',
            amount: '384217243.70',
        },
        {
            id: 287976,
            companyName: 'Schmeler, Cremin and Koch',
            productName: 'Aquamarine',
            dateCreated: '07/05/2023',
            amount: '272793734.89',
        },
        {
            id: 796856,
            companyName: 'Ullrich, Russel and Metz',
            productName: 'sapphire',
            dateCreated: '09/23/2023',
            amount: '930292323.96',
        },
        { id: 36829, companyName: 'Gibson, Hermiston and Johns', productName: 'Opal', dateCreated: '05/28/2023', amount: '766275674.48' },
        { id: 315530, companyName: 'Bruen Inc', productName: 'Topaz', dateCreated: '05/30/2023', amount: '972727724.51' },
        { id: 885379, companyName: 'Zieme, Reilly and Swift', productName: 'Ruby', dateCreated: '09/14/2023', amount: '798215279.87' },
        { id: 544341, companyName: 'Heathcote-Hyatt', productName: 'Garnet', dateCreated: '09/10/2023', amount: '130139483.38' },
        {
            id: 800107,
            companyName: 'Greenfelder, Moore and Lind',
            productName: 'Aquamarine',
            dateCreated: '02/09/2023',
            amount: '716406843.56',
        },
        {
            id: 768391,
            companyName: 'Balistreri, Deckow and West',
            productName: 'Amethyst',
            dateCreated: '03/19/2023',
            amount: '46233337.75',
        },
        { id: 67029, companyName: 'Okuneva, Smith and Kuhn', productName: 'Opal', dateCreated: '06/10/2023', amount: '28452897.83' },
        { id: 464702, companyName: 'Hauck, Koch and Reinger', productName: 'Peridot', dateCreated: '08/02/2023', amount: '96568666.52' },
        { id: 238937, companyName: 'Volkman-Vandervort', productName: 'Emerald', dateCreated: '09/01/2023', amount: '345878071.39' },
        { id: 320399, companyName: 'Lemke, Swift and Parker', productName: 'Peridot', dateCreated: '02/01/2023', amount: '521644704.85' },
        { id: 834595, companyName: 'Koelpin Inc', productName: 'sapphire', dateCreated: '02/11/2023', amount: '150898739.90' },
        { id: 261847, companyName: 'Kuhic, Crona and Rosenbaum', productName: 'Opal', dateCreated: '05/23/2023', amount: '149872184.47' },
    ];
    public gemstoneProducts: any = this.mockSearchData.map((p) => {
        return {
            productName: p.productName,
            partNumber: p.productName.slice(0, 3) + Math.floor(Math.random() * 10000),
        };
    });

    public salesOrders: any = this.mockSearchData
        .map((p) => {
            return {
                id: p.id,
                name: p.companyName,
                productName: p.productName,
                amount: p.amount,
                dateCreated: p.dateCreated,
            };
        })
        .slice(0, 5);
    public purchaseOrders: any = this.mockSearchData
        .map((p) => {
            return {
                id: p.id,
                name: p.companyName,
                productName: p.productName,
                amount: p.amount,
                dateCreated: p.dateCreated,
            };
        })
        .slice(0, 5);
    public invoiceNumbers = this.mockSearchData
        .map((p) => {
            return {
                id: p.id,
                name: p.companyName,
                productName: p.productName,
                amount: p.amount,
                dateCreated: p.dateCreated,
            };
        })
        .slice(0, 5);

    public searchResults = [
        { category: 'Inventory', results: this.gemstoneProducts.splice(0, 3) },
        { category: 'Sales', results: this.salesOrders.splice(0, 3) },
        { category: 'Purchasing', results: this.purchaseOrders.splice(0, 3) },
        { category: 'Invoices', results: this.invoiceNumbers.splice(0, 3) },
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
