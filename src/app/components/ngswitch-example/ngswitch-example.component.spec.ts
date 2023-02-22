import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchExampleComponent } from './ngswitch-example.component';

describe('NgswitchExampleComponent', () => {
  let component: NgswitchExampleComponent;
  let fixture: ComponentFixture<NgswitchExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswitchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
