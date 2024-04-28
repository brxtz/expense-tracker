import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTwoComponent } from './body-two.component';

describe('BodyTwoComponent', () => {
  let component: BodyTwoComponent;
  let fixture: ComponentFixture<BodyTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
