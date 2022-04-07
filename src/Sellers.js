const { endPointCall } = require('./utils');

exports.createSeller = ({ endPointURL, endPointKey = 'secret', ...data }) =>
  endPointCall({
    data,
    endPointKey,
    endPointURL,
    entity: `sellers`,
    method: 'POST'
  });
