const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi should match up utils calculateNumber', () => {
    const stubbed = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(stubbed.calledWith('SUM', 100, 20)).to.be.true;
    expect(stubbed.calledOnce).to.be.true;
    stubbed.restore();
  });
});
