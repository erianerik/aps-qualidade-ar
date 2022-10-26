import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacoesAdicionaisPage } from './informacoes-adicionais.page';

describe('InformacoesAdicionaisPage', () => {
  let component: InformacoesAdicionaisPage;
  let fixture: ComponentFixture<InformacoesAdicionaisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesAdicionaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacoesAdicionaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
