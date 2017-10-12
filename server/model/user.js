var mongoose = require('mongoose');
// mongoose.connect('mongodb://blacksmith:1Hari@blacksmith-shard-00-00-p4h2m.mongodb.net:27017,blacksmith-shard-00-01-p4h2m.mongodb.net:27017,blacksmith-shard-00-02-p4h2m.mongodb.net:27017/blacksmith?ssl=true&replicaSet=Blacksmith-shard-0&authSource=admin');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  salt: String,
  role: String,
  createdAt: Date,
  updatedAt: Date
});

var userModels = mongoose.model('User', UserSchema);

module.exports = userModels;
