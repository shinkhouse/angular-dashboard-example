import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexStroke,
    ApexYAxis,
    ApexTitleSubtitle,
    ApexLegend,
    NgApexchartsModule,
    ApexTheme,
    ApexTooltip,
} from 'ng-apexcharts';

import { CommonModule } from '@angular/common';
import { CategoriesArr, Transaction, Transactions } from 'src/app/core/interface/transactions.interface';
import { ThemingService } from 'src/app/core/services/theming.service';
import { Subject, lastValueFrom, takeUntil } from 'rxjs';
import { CategoryItemComponent } from 'src/app/shared/components/category-item/category-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
    MatDialog
  } from '@angular/material/dialog';
import { AddGoalDialogComponent } from 'src/app/shared/components/add-goal-dialog/add-goal-dialog.component';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    yaxis: ApexYAxis;
    title: ApexTitleSubtitle;
    labels: string[];
    legend: ApexLegend;
    subtitle: ApexTitleSubtitle;
    theme: ApexTheme;
    tooltip: ApexTooltip;
};
@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, NgApexchartsModule, CategoryItemComponent, MatButtonModule, MatIconModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
    @ViewChild('chart') chart!: ChartComponent;
    public chartOptions: ChartOptions;
    public transactions: Transaction[] = Transactions.splice(0, 30);
    public categories = CategoriesArr;
    public loading: boolean = false;
    public darkMode: boolean = false;
    public transactionDetailsForChart: number[] = this.transactions.map((transaction) => {
        return transaction.amount;
    });
    public transactionDatesForChart: string[] = this.transactions.map((transaction) => {
        return transaction.date.toISOString();
    });
    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private theming: ThemingService, private dialog: MatDialog) {
        this.chartOptions = {
            theme: {
                mode: this.darkMode ? 'dark' : 'light',
            },
            series: [
                {
                    name: 'Spending',
                    data: this.transactionDetailsForChart,
                },
            ],
            chart: {
                type: 'area',
                height: 350,
                width: '100%',
                foreColor: this.darkMode ? '#fff' : '#000',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'straight',
            },

            title: {
                text: 'Spending',
                align: 'left',
            },
            subtitle: {
                text: 'Spending',
                align: 'left',
            },
            labels: this.transactionDatesForChart,
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                opposite: true,
            },
            legend: {
                horizontalAlign: 'left',
            },
            tooltip: {
                theme: this.darkMode ? 'dark' : 'light',
            },
        };
    }

    ngAfterViewInit() {
      this.theming
            .isDarkMode()
            .pipe(takeUntil(this.destroy$))
            .subscribe((darkMode: boolean) => {
                this.darkMode = darkMode;
                console.log(darkMode);
                if (this.chart) {
                    this.chart.updateOptions({
                        theme: {
                            mode: this.darkMode ? 'dark' : 'light',
                        },
                        chart: {
                            foreColor: this.darkMode ? '#fff' : '#000',
                        },
                        tooltip: {
                            theme: this.darkMode ? 'dark' : 'light',
                        },
                    });
                }
            });

            setTimeout(() => {
                this.loading = false;
            }, 1450);
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    addGoal() {
        this.dialog.open(AddGoalDialogComponent, {
            width: '500px',
        });
    }
}
