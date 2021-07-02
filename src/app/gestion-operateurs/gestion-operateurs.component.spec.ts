import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionOperateursComponent } from './gestion-operateurs.component';

describe('GestionOperateursComponent', () => {
  let component: GestionOperateursComponent;
  let fixture: ComponentFixture<GestionOperateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionOperateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionOperateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
