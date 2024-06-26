import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FedoraComponent } from './fedora.component';

describe('FedoraComponent', () => {
  let component: FedoraComponent;
  let fixture: ComponentFixture<FedoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FedoraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FedoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
