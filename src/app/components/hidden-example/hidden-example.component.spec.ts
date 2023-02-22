import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenExampleComponent } from './hidden-example.component';

describe('HiddenExampleComponent', () => {
  let component: HiddenExampleComponent;
  let fixture: ComponentFixture<HiddenExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiddenExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
