import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVendaComponent } from './detail-venda.component';

describe('DetailVendaComponent', () => {
  let component: DetailVendaComponent;
  let fixture: ComponentFixture<DetailVendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailVendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
