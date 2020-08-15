const app = require('./server');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3001;

// stablish connection to DB
const { connectToDB } = require('./database');
connectToDB();

app.listen(port, () => {
  console.log(`Example app listinening on port ${port}`);
});
