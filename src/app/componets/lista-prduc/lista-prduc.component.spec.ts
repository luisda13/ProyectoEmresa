import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPrducComponent } from './lista-prduc.component';

describe('ListaPrducComponent', () => {
  let component: ListaPrducComponent;
  let fixture: ComponentFixture<ListaPrducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPrducComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPrducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
