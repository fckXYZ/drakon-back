const {
  PORT = 3000,
  NODE_ENV,
  JWT_SECRET,
  MONGO_DB_ADDRESS,
} = process.env;
const rateLimit = require('express-rate-limit');
const path = require("path");

const url = 'https://drakon.band';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

module.exports = {
  BASEDIR: path.join(__dirname + '/uploads'),
  PORT,
  JWT_SECRET: NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
  CORS_ADDR: NODE_ENV === 'production' ? url : 'http://localhost:3003',
  MONGO_DB_ADDRESS: NODE_ENV === 'production' ? MONGO_DB_ADDRESS : 'mongodb://localhost:27017/p2p-db-20210702',
  limiter,
};
