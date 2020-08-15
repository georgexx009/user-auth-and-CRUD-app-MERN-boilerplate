// getting environment variables
const dotenv = require('dotenv');
dotenv.config();

// mongo database URI
const mongoUri = process.env.MONGO_URI;

const configObj = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
};

const dbStreamsHandler = {
  error: () => {
    console.log('> error ocurred from the database');
  },
  open: () => {
    console.log('> successfully opened the database');
  },
};

module.exports = { mongoUri, configObj, dbStreamsHandler };
