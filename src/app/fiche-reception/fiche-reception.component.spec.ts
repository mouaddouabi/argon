import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheReceptionComponent } from './fiche-reception.component';

describe('FicheReceptionComponent', () => {
  let component: FicheReceptionComponent;
  let fixture: ComponentFixture<FicheReceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheReceptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
