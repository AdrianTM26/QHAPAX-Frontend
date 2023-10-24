import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoControversiaComponent } from './historico-controversia.component';

describe('HistoricoControversiaComponent', () => {
  let component: HistoricoControversiaComponent;
  let fixture: ComponentFixture<HistoricoControversiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricoControversiaComponent]
    });
    fixture = TestBed.createComponent(HistoricoControversiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
