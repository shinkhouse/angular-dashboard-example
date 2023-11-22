import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DensityOption, Density } from './theming.interface';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemingService {
    private renderer: Renderer2;
    private darkSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
    dark$ = this.darkSubject.asObservable();

    public density: Density = 'comfortable';
    public densityOptions: DensityOption[] = [
        { name: 'Comfortable', value: 'comfortable', icon: 'density_large' },
        { name: 'Cozy', value: 'cozy', icon: 'density_medium' },
        { name: 'Compact', value: 'compact', icon: 'density_small' },
    ];

    constructor(private rendererFactory: RendererFactory2) {
        this.renderer = this.rendererFactory.createRenderer(null, null);
        this.darkSubject.value ? this.renderer.addClass(document.body, 'dark') : null;
        this.renderer.addClass(document.body, this.density);
    }

    toggleDarkMode() {
        this.darkSubject.next(!this.darkSubject.value);
        this.darkSubject.value ? this.renderer.addClass(document.body, 'dark') : this.renderer.removeClass(document.body, 'dark');
    }

    getDarkModeIcon() {
        return this.darkSubject.value ? 'wb_sunny' : 'brightness_3';
    }

    getDarkModeButtonTooltip(): string {
        return this.darkSubject.value ? 'Light mode' : 'Dark mode';
    }
    changeDensity(density: Density) {
        this.renderer.removeClass(document.body, this.density);
        this.density = density;
        this.renderer.addClass(document.body, this.density);
    }

    isDarkMode(): Observable<boolean> {
        return this.dark$;
    }
}
