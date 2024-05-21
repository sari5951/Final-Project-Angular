import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaainComponent } from './maain.component';

describe('MaainComponent', () => {
  let component: MaainComponent;
  let fixture: ComponentFixture<MaainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
