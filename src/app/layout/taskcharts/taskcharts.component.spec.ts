import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskchartsComponent } from './taskcharts.component';

describe('TaskchartsComponent', () => {
  let component: TaskchartsComponent;
  let fixture: ComponentFixture<TaskchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
