import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OchoreinasComponent } from './ochoreinas.component';

describe('OchoreinasComponent', () => {
  let component: OchoreinasComponent;
  let fixture: ComponentFixture<OchoreinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OchoreinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OchoreinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
