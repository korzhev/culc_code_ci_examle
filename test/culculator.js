'use strict';

const chai = require('chai');
const expect = chai.expect;
const Culculator = require('../lib/culculator');
let culc;

chai.should();

before(() => {
  culc = new Culculator();
})

describe('Тестируем калькулятор', () => {
  afterEach(() => culc.reset());

  describe('#division() - деление', () => {
    it('должен выбросить ошибку, если делим на 0', () => {
      expect(() => { culc.division(12, 0); }).to.throw(TypeError);
    });
    it('12 / 2 = 6', () => {
      culc.division(12, 2).should.be.equal(6);
    });
    it('10 / 4 = 2.5', () => {
      culc.division(10, 4).should.be.equal(2.5);
    });
  });

  describe('#sum() - сложение двух аргументов', () => {
    it('12 + 2 = 14', () => {
      culc.sum(12, 2).should.be.equal(14);
    });
    it('-10 + 4 = -6', () => {
      culc.sum(-10, 4).should.be.equal(-6);
    });
  });

  describe('#eSum() - сумма по массиву', () => {
    it('12 + 2 + 2 + (-10) = 6', () => {
      culc.eSum([12, 2, 2, -10]).should.be.equal(6);
    });
  });

  describe('#last() - значение последней операции', () => {
    it('12 + 2 + 2 + (-10) = 6', () => {
      culc.eSum([12, 2, 2, -10]);
      culc.last().should.be.equal(6);
    });
  });

  describe('#multi() - умножение', () => {
    it('12 * (-2) = -24', () => {
      culc.multi(12, -2).should.be.equal(-24);
    });
  });


  describe('#async() - асинхронный тест', (done) => {
    it('я серьёзно', () => {
      culc.async(() => {
        1 + 1 + 1;
        done();
      });
    });
  });

});


