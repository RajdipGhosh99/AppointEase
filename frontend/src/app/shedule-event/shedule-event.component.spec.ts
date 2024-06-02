import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleEventComponent } from './shedule-event.component';

describe('SheduleEventComponent', () => {
  let component: SheduleEventComponent;
  let fixture: ComponentFixture<SheduleEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheduleEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SheduleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
