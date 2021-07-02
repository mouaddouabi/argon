import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheBonEntreeComponent } from './fiche-bon-entree.component';

describe('FicheBonEntreeComponent', () => {
  let component: FicheBonEntreeComponent;
  let fixture: ComponentFixture<FicheBonEntreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheBonEntreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheBonEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
