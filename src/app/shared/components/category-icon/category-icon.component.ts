import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export type CategoryColor =
    | 'blue'
    | 'red'
    | 'orange'
    | 'green'
    | 'purple'
    | 'yellow'
    | 'gray'
    | 'inverseBlue'
    | 'inverseRed'
    | 'inverseOrange'
    | 'inverseYellow'
    | 'inverseGreen'
    | 'inverseGray'
    | 'inversePurple'
    | 'cyan'
    | 'inverseCyan';
export type CategoryType = 'filled' | 'outlined' | 'transparent' | 'outlined-bg';

@Component({
    selector: 'app-category-icon',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    templateUrl: './category-icon.component.html',
    styleUrl: './category-icon.component.scss',
    host: {
        '[class]': '[type, color]',
    },
})
export class CategoryIconComponent {
    @Input() icon!: string;
    @Input() color?: CategoryColor = 'blue';
    @Input() type?: CategoryType = 'outlined-bg';
}
