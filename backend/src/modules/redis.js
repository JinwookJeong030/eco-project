const redis = require('redis');

const redisInfo = require('../config/redis.config.js') 

const redisClient = redis.createClient(redisInfo);

module.exports = redisClient