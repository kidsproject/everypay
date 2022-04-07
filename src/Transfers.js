const { endPointCall } = require('./utils');

exports.createPaymentTransfer = ({
  endPointKey = 'secret',
  endPointURL,
  paymentId,
  ...data
}) =>
  endPointCall({
    data,
    endPointKey,
    endPointURL,
    entity: `payments/${paymentId}/transfers`,
    method: 'POST'
  });

exports.createDirectTransfer = ({
  endPointKey = 'secret',
  endPointURL,
  sellerId,
  ...data
}) =>
  endPointCall({
    data,
    endPointKey,
    endPointURL,
    entity: `sellers/${sellerId}/transfers`,
    method: 'POST'
  });
