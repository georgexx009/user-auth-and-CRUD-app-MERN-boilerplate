const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

module.exports = env => {
  // get the root path
  const currentPath = path.join(__dirname);

  // create the fall back path
  const basePath = currentPath + '/.env';

  // concat the environment name to our filename
  // to specify the correct env file
  const envPath = basePath + '.' + env.ENVIRONMENT;

  // check if the file exists
  // otherwise fall back to the production .env
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  // set the corresponding .env path in path property
  const fileEnv = dotenv.config({ path: finalPath }).parsed;

  // reduce it to a nice object, the same as before but with process.env keys
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return envKeys;
};
