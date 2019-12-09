class   Setters {
  constructor(app, db_mongo) {
    this.app = app;
    this.db_mongo = db_mongo;
    this.defineSetters()
    console.log("dans le constructeur de setter")
    console.log(typeof(app))
  }

  defineSetters() {

    this.app.post('/', function (req, res) {

      	res.send('Got a POST request')
    })

    this.app.post('/save', function (req, res) {

    	res.send('Got a POST request')
    })

    this.app.post('/cards:name?', (req, res) => {
        console.log("request POST /cards with a parameter");
        console.log("req body")
        console.log(req.body)
        console.log(req.query)
        console.log(req.query.name)
        res.send(`Je vais renvoyer la carte qui porte le nom ${req.query.name} mais dans la requete post`)
      //   const cards_res = this.db_mongo.collection('cards')
      //   cards_res.find().toArray((err, items) => {
      //     // console.log(items)
      //     res.send(items)
      // })
      // res.send(all_cards);
    });
  }
}

module.exports = Setters
