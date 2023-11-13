import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavHoverMenuComponent } from './sidenav-hover-menu.component';

describe('SidenavHoverMenuComponent', () => {
  let component: SidenavHoverMenuComponent;
  let fixture: ComponentFixture<SidenavHoverMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [SidenavHoverMenuComponent]
});
    fixture = TestBed.createComponent(SidenavHoverMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
