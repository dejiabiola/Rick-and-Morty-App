import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharcardComponent } from './charcard.component';

describe('CharcardComponent', () => {
  let component: CharcardComponent;
  let fixture: ComponentFixture<CharcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
