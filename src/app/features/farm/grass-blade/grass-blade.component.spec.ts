import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrassBladeComponent } from './grass-blade.component';

describe('GrassBladeComponent', () => {
  let component: GrassBladeComponent;
  let fixture: ComponentFixture<GrassBladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrassBladeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrassBladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
