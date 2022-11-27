import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroDeArbitrosPage } from './registro-de-arbitros.page';

describe('RegistroDeArbitrosPage', () => {
  let component: RegistroDeArbitrosPage;
  let fixture: ComponentFixture<RegistroDeArbitrosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDeArbitrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroDeArbitrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
