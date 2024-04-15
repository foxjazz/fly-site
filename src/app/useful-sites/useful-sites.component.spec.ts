import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulSitesComponent } from './useful-sites.component';

describe('UsefulSitesComponent', () => {
  let component: UsefulSitesComponent;
  let fixture: ComponentFixture<UsefulSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsefulSitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsefulSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
