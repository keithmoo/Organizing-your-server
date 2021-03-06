const { NODE_ENV } = require('./config');
const logger = require('./logger');

function error(error, req, res){
  let message;
  if (NODE_ENV === 'production') {
    message = 'Server error';
  } else {
    logger.error(error.message);
    message = error.message;
  }

  res.status(500).json({ error: message });
}

module.exports = error;