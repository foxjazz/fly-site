import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommPassionComponent } from './comm-passion.component';

describe('CommPassionComponent', () => {
  let component: CommPassionComponent;
  let fixture: ComponentFixture<CommPassionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommPassionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommPassionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
