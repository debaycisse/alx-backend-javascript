const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('testing sendPaymentRequestToAPI function, using hooks', () => {
  let spiedConsole;

  beforeEach(() => {
    if (!spiedConsole) spiedConsole = sinon.spy(console);
  });

  afterEach(() => {
    if (spiedConsole) spiedConsole.log.resetHistory();
  });

  it('should verify that console output is correct', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spiedConsole.log.calledWith('The total is: 120')).to.be.true;
    expect(spiedConsole.log.calledOnce).to.be.true;
  });

  it('should verify that out of the console is correct', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spiedConsole.log.calledWith('The total is: 20')).to.be.true;
    expect(spiedConsole.log.calledOnce).to.be.true;
  });
});
