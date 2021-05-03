import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncriptarPageComponent } from './encriptar-page.component';

describe('EncriptarPageComponent', () => {
  let component: EncriptarPageComponent;
  let fixture: ComponentFixture<EncriptarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncriptarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncriptarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
