import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesArr, CategoryColors, humanize } from 'src/app/core/interface/transactions.interface';
import { faker } from '@faker-js/faker';
import { CategoryIconComponent } from 'src/app/shared/components/category-icon/category-icon.component';
import { CategoryItemComponent } from 'src/app/shared/components/category-item/category-item.component';

@Component({
    selector: 'app-categories',
    standalone: true,
    imports: [CommonModule, CategoryItemComponent],
    templateUrl: './categories.component.html',
    styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
    public categories = CategoriesArr;
}
