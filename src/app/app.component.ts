import { Component } from '@angular/core';
import { Service1Service } from './services/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public chiffres: number[] = [];
  public total: number;

  private dateStart?: Date;
  public timer?: number;

  private readonly maxtotal = 100;
  private readonly maxunit = 40;

  constructor(
    private service1: Service1Service
  ) {
    this.generer();
  }

  public serviceTestFunction() {
    this.service1.testFunction();
  }

  public get testServiceProperty(): number {
    return this.service1.testProperty;
  }


  public nouveau(): void {
    this.generer();
  }

  private generer(): void {
    while (this.chiffres.length > 0) {
      this.chiffres.pop();
    }

    while (this.chiffres.length !== 6) {
      const rand = Math.floor(Math.random() * this.maxunit) + 1;
      if (!this.chiffres.includes(rand)) {
        this.chiffres.push(rand);
      }
    }

    this.chiffres.sort((a, b) => {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    });

    const sum = this.chiffres.reduce((p, c) => {
      return (p += c);
    }, 0);

    this.total = Math.floor(Math.random() * this.maxtotal) + 1;

    this.dateStart = new Date();
    setInterval(() => {
      this.timer = Math.round(
        (new Date().getTime() - this.dateStart.getTime()) / 1000
      );
    }, 1000);
  }
}
