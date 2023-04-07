import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteExampleComponent } from './auto-complete-example.component';

describe('AutoCompleteExampleComponent', () => {
  let component: AutoCompleteExampleComponent;
  let fixture: ComponentFixture<AutoCompleteExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCompleteExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
