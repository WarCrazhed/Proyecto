import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MivehiculoComponent } from './mivehiculo.component';

describe('MivehiculoComponent', () => {
  let component: MivehiculoComponent;
  let fixture: ComponentFixture<MivehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MivehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MivehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
