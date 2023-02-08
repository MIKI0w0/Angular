import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearuserComponent } from './crearuser.component';

describe('CrearuserComponent', () => {
  let component: CrearuserComponent;
  let fixture: ComponentFixture<CrearuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
