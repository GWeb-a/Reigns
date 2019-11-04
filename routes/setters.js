class   Setters {
  constructor(app, db_mongo) {
    this.app = app;
    this.db_mongo = db_mongo;
    this.defineSetters()
  }

  defineSetters() {

    this.app.post('/', function (req, res) {

      	res.send('Got a POST request')
    })

    this.app.post('/save', function (req, res) {

    	res.send('Got a POST request')
    })
  }
}

module.exports = Setters
