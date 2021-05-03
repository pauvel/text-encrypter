import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocenosPageComponent } from './conocenos-page.component';

describe('ConocenosPageComponent', () => {
  let component: ConocenosPageComponent;
  let fixture: ComponentFixture<ConocenosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConocenosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocenosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
