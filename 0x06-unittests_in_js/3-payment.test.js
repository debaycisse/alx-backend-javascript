const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi should match up utils calculateNumber', () => {
    const spied = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);

    expect(spied.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spied.calculateNumber.calledOnce).to.be.true;
  });
});
