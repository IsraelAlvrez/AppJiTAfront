import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceCandidatoComponent } from './interface-candidato.component';

describe('InterfaceCandidatoComponent', () => {
  let component: InterfaceCandidatoComponent;
  let fixture: ComponentFixture<InterfaceCandidatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceCandidatoComponent]
    });
    fixture = TestBed.createComponent(InterfaceCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
