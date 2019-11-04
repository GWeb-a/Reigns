const MongoClient = require( 'mongodb' ).MongoClient;
const Init = require('./init.js')

class MongoUtil {

  constructor(glb) {
    this.glb = glb
  }

  connectToServer(callback) {
    MongoClient.connect(this.glb.getUrl(), { useNewUrlParser: true }, (err, client) => {
      this._db  = client.db('test');
      return callback(err);
    } );
  }

  getDb() {
    return this._db;
  }
}
module.exports = MongoUtil
