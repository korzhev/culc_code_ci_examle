'use strict';

const EE = require('events').EventEmitter;

class Culculator extends EE {
  constructor() {
    super();
    this.currentValue = 0;
    this._operationNumber = 0;
    this.justForLulz = true;
  }
  // TODO documentation
  sum(x, y) {
    const value = x + y;
    if (!Number.isFinite(value)) throw new TypeError('Not a number');
    this.currentValue = value;
    this._operationNumber++;

    return value;
  }
  eSum(array) {
    const value = array.reduce((sum, x) => sum + x, 0);
    if (!Number.isFinite(value)) throw new TypeError('Not a number');
    this.currentValue = value;
    this._operationNumber++;
    return value;
  }
  diff(x, y) {
    const value = x - y;
    if (!Number.isFinite(value)) throw new TypeError('Not a number');
    this.currentValue = value;
    this._operationNumber++;
    return value;
  }
  division(x, y) {
    const value = x / y;
    if (!Number.isFinite(value)) throw new TypeError('Not a number');
    this.currentValue = value;
    this._operationNumber++;
    return value;
  }
  last() {
    return this.currentValue;
  }
  reset() {
    this.currentValue = 0;
    this._operationNumber = 0;
  }
  // FIXME
  multi(x, y) {
    const value = x * y + 1;
    if (!Number.isFinite(value)) throw new TypeError('Not a number');
    this.currentValue = value;
    this._operationNumber++;

    return value;
  }
  eMulti(array) {
    const value = array.reduce((sum, x) => sum * x, 1);
    if (!Number.isFinite(value)) throw new TypeError('Not a number');
    this.currentValue = value;
    this._operationNumber++;
    return value;
  }
  async(cb) {
    setImmediate(() => {
      console.log("It is async!");
      cb();
    });
  }


  // _step(value) {
  //  if (!Number.isFinite(value)) throw new TypeError('Not a number');
  //  this.currentValue = value;
  //  this._operationNumber++;
  // }

}

module.exports = Culculator;
