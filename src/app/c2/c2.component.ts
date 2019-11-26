import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  varBolean: boolean;
  varSwitch: number;
  varFor: number[];
  numeroPipe = 10.55;
  dineroPipe = 13.75;
  fechaPipe = Date.now();
  objetoPipe = {
    nombre: 'curso',
    asistentes: 12
  };

  constructor() {
    this.varBolean = true;
    this.varSwitch = 1;
    this.varFor=[1,2,3,4,5,6];
  }

  ngOnInit() {
  }

}
