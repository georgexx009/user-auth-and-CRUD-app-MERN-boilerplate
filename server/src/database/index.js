const mongoose = require('mongoose');
const { mongoUri, configObj, dbStreamsHandler } = require('./dbConfig');

const connectToDB = () => {
  // connect to DB and pass custom configuration
  mongoose.connect(mongoUri, configObj);

  // connection status
  const db = mongoose.connection;
  // read connection strems
  db.on('error', dbStreamsHandler.error);
  db.on('open', dbStreamsHandler.open);

  // to avoid console message: 'DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.'
  mongoose.set('useCreateIndex', true);
};

module.exports = { connectToDB };
