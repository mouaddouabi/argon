import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestEmballageComponent } from './gest-emballage.component';

describe('GestEmballageComponent', () => {
  let component: GestEmballageComponent;
  let fixture: ComponentFixture<GestEmballageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestEmballageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestEmballageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
