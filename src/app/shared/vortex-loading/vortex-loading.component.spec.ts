import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VortexLoadingComponent } from './vortex-loading.component';

describe('VortexLoadingComponent', () => {
  let component: VortexLoadingComponent;
  let fixture: ComponentFixture<VortexLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VortexLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VortexLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
