import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SearchPatientComponent } from './search-patient.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsuarioService } from '../../services/usuario.service';

describe('SearchPatientComponent', () => {
  let component: SearchPatientComponent;
  let fixture: ComponentFixture<SearchPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SearchPatientComponent],
      providers:[UsuarioService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Ordenamiento de pacientes', function () {
    var arr = [
      { "nombre": "aldo", "DPI": 543 },
      { "nombre": "aldo", "DPI": 123 },
      { "nombre": "aldo", "DPI": 723 }
    ];

    arr.sort(component.orderPatientByDPI);

    var arr2 = [
      { "nombre": "aldo", "DPI": 123 },
      { "nombre": "aldo", "DPI": 543 },
      { "nombre": "aldo", "DPI": 723 }
    ];
    expect(arr).toEqual(arr2);
  });


  it('Probando funcion orderByDPI a>b', function () {
    let resp = component.orderPatientByDPI(2,1);
    expect(resp).toEqual(0);
  });

    it('Probando funcion orderByDPI a>b', function () {
    let resp = component.orderPatientByDPI(2,1);
    expect(resp).toEqual(0);
  });

});
