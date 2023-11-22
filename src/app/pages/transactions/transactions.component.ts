import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Transaction, Transactions, getCategoryColor } from 'src/app/core/interface/transactions.interface';
import { ChipComponent, ChipsColor } from 'src/app/shared/components/chip/chip.component';

@Component({
    selector: 'app-transactions',
    standalone: true,
    imports: [CommonModule, MatTableModule, ChipComponent],
    templateUrl: './transactions.component.html',
    styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
    public transactions: Transaction[] = Transactions;
    public displayedColumns: string[] = ['name', 'personal-category', 'amount', 'date'];

    getCategoryColor(category: string): ChipsColor {
        return getCategoryColor(category);
    }
}
