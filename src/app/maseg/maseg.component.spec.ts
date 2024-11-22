import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasegComponent } from './maseg.component';

describe('MasegComponent', () => {
  let component: MasegComponent;
  let fixture: ComponentFixture<MasegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasegComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
