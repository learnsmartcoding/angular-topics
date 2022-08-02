import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicControlsComponent } from './dynamiccontrols.component';

describe('DynamiccontrolsComponent', () => {
  let component: DynamicControlsComponent;
  let fixture: ComponentFixture<DynamicControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
