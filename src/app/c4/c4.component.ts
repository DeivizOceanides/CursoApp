import { Component, OnInit } from '@angular/core';
interface Coche {
  marca: string;
  ruedas: number;
}
export class CCoche{

  constructor(marca: string, ruedas: number) {
    this.marca = marca;
    this.ruedas = ruedas;
  }

  marca: string;
  ruedas: number;
}

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {
  vnumero: number;
  vcadena: string;
  vtupla: [string, number];
  vCoche: Coche;
  vCcoche: CCoche;
  constructor() {
    this.vnumero = 8;
    this.vcadena = 'NoMentero';
    this.vtupla = ['Fer', 10];
    this.vCoche = {marca: 'ford', ruedas: 3};
    this.vCcoche = new CCoche('Mazda', 4);
  }

  ngOnInit() {
  }
cambiarnumero(valor) {
    this.vnumero = valor;
}
  cambiarcadena(valor) {
    this.vcadena = valor;
  }
}
