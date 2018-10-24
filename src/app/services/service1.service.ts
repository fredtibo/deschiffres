import { Injectable } from '@angular/core';

@Injectable()
export class Service1Service {

  private _test = 0;

  constructor() {
  }

  public get testProperty(): number {
    return this._test;
  }

  public set testProperty(num: number) {
    this._test = num;
  }

  public testFunction() {
    this._test++;
    console.log('testFunction', this._test);
  }
}
