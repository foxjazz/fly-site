import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereIsTruthComponent } from './where-is-truth.component';

describe('WhereIsTruthComponent', () => {
  let component: WhereIsTruthComponent;
  let fixture: ComponentFixture<WhereIsTruthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhereIsTruthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhereIsTruthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
