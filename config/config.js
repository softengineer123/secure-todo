


module.exports = {

  MONGO_URL: process.env.NODE_ENV === 'production' ? process.env.MONGO_URL : 'mongodb://127.0.0.1:27017/node-app-secretnotes',
  PORT: process.env.PORT ? process.env.PORT : 5000,
  JWT_CODE: process.env.JWT_CODE || 'kebbaro4ever',
  REDIS_URL: process.env.NODE_ENV === 'production' ? process.env.REDIS_URL : ''


}



























