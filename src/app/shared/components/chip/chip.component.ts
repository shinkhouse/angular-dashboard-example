import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

export type ChipsColor =
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
export type ChipsType = 'filled' | 'outlined' | 'transparent' | 'outlined-bg';

@Component({
    selector: 'app-chip',
    standalone: true,
    imports: [CommonModule],
    templateUrl: `./chip.component.html`,
    styleUrl: './chip.component.scss',
    host: {
        '[class]': '[type, color]'
    }
})
export class ChipComponent {
    @Input() color?: ChipsColor = 'blue';
    @Input() type?: ChipsType = 'outlined-bg';
}
