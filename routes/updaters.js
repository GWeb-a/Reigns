class   Updaters {

  constructor(app, db_mongo) {
    this.app = app;
    this.db_mongo = db_mongo;
    this.defineUpdaters()
  }

  defineUpdaters() {
    this.app.put('/card', function (req, res) {
      console.log("got a PUT request on /card")
      res.send('Got a PUT request at /card')
    })

    this.app.put('/user', function (req, res) {
      res.send('Got a PUT request at /user')
    })
  }
}

module.exports = Updaters
