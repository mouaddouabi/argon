import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFermeComponent } from './gestion-ferme.component';

describe('GestionFermeComponent', () => {
  let component: GestionFermeComponent;
  let fixture: ComponentFixture<GestionFermeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionFermeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionFermeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
