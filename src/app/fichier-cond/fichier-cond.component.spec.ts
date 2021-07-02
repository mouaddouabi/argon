import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichierCondComponent } from './fichier-cond.component';

describe('FichierCondComponent', () => {
  let component: FichierCondComponent;
  let fixture: ComponentFixture<FichierCondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichierCondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichierCondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
