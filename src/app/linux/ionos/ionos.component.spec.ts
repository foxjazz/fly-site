import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonosComponent } from './ionos.component';

describe('IonosComponent', () => {
  let component: IonosComponent;
  let fixture: ComponentFixture<IonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
