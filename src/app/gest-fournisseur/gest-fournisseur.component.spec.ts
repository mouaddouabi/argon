import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestFournisseurComponent } from './gest-fournisseur.component';

describe('GestFournisseurComponent', () => {
  let component: GestFournisseurComponent;
  let fixture: ComponentFixture<GestFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
