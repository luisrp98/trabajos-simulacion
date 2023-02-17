import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgGameComponent } from './img-game.component';

describe('ImgGameComponent', () => {
  let component: ImgGameComponent;
  let fixture: ComponentFixture<ImgGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
