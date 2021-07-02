import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielEmballageComponent } from './materiel-emballage.component';

describe('MaterielEmballageComponent', () => {
  let component: MaterielEmballageComponent;
  let fixture: ComponentFixture<MaterielEmballageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterielEmballageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterielEmballageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
