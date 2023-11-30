import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { Account, Accounts } from 'src/app/core/interface/account.interface';
import { DateAgoPipe } from 'src/app/core/pipes/date-ago.pipe';
import { ChipComponent, ChipsColor } from 'src/app/shared/components/chip/chip.component';
import { MatTableModule } from '@angular/material/table';
import { Transaction, Transactions, getCategoryColor, humanize } from 'src/app/core/interface/transactions.interface';

@Component({
    selector: 'app-accounts',
    standalone: true,
    imports: [CommonModule, MatExpansionModule, DatePipe, CurrencyPipe, DateAgoPipe, PercentPipe, ChipComponent, MatTableModule],
    templateUrl: './accounts.component.html',
    styleUrl: './accounts.component.scss',
})
export class AccountsComponent {
    public accounts: Account[] = Accounts;
    public transactions: Transaction[] = Transactions;
    public displayedColumns: string[] = ['name', 'personal-category', 'amount', 'date'];
    constructor() {}

    getCategoryColor(category: string): ChipsColor {
        return getCategoryColor(category);
    }

    humanizeCategory(category: string): string {
        return humanize(category);
    }
}
