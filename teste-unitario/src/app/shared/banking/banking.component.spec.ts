import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from '../investiments/list/list.component';
import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent, ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(U) getPoupanca(): poupanca should have 10`, () => {
    expect(component.getPoupanca).toEqual(10);
  });

  it(`(U) getCarteira(): carteira should have 10`, () => {
    expect(component.getCarteira).toEqual(50);
  });

  it(`(U) setSacar(): should transfer poupanca from carteira`, () => {
    component.setSacar('10');
    fixture.detectChanges();

    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });
  
  it(`
    (U) setSacar(): should transfer poupanca dont have string (isNaN)
    or poupanca < value`, () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();

    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it(`(I) setSacar(): should transfer poupanca dont have string (isNaN)
    or poupanca < value`, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-sacar').value = "10";
    el.querySelector('#button-sacar').click();
    fixture.detectChanges();

    expect(el.querySelector('#poupanca-value').textContent).toEqual('0');
    expect(el.querySelector('#carteira-value').textContent).toEqual('60');
    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });

  it(`(U) setDepositar(): should transfer carteira from poupanca`, () => {
    component.setDepositar('50');
    fixture.detectChanges();

    expect(component.getCarteira).toEqual(0);
    expect(component.getPoupanca).toEqual(60);
  });

  it(`
    (U) setDepositar(): should carteira poupanca dont have string (isNaN)
    or carteira < value`, () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();

    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it(`(I) setDepositar(): should transfer carteira from poupanca`, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-depositar').value = "10";
    el.querySelector('#button-depositar').click();
    fixture.detectChanges();

    expect(el.querySelector('#poupanca-value').textContent).toEqual('20');
    expect(component.getPoupanca).toEqual(20);
    expect(component.getCarteira).toEqual(40);
  });
});
