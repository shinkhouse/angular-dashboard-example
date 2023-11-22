import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryIconComponent } from '../category-icon/category-icon.component';
import { humanize } from 'src/app/core/interface/transactions.interface';

@Component({
    selector: 'app-category-item',
    standalone: true,
    imports: [CommonModule, CategoryIconComponent],
    templateUrl: './category-item.component.html',
    styleUrl: './category-item.component.scss',
})
export class CategoryItemComponent {
    @Input() category: any;
    constructor() {}
    humanizeCategory(category: string): string {
        return humanize(category);
    }
}
