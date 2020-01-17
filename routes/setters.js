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

    this.app.get('/toto', (req, res) => {
      let vartest = "toto"
      console.log("reques test toto");
      res.send(`Je vais renvoyer la carte qui porte le nom ${vartest} mais dans la requete post`)
    });

    this.app.post('/cards', (req, res) => {
        console.log("request POST /cards with a parameter");
        console.log("req body")
        console.log(req.body)
        console.log(req.query)
        console.log(req.query.name)
        res.send(`Je vais renvoyer la carte qui porte le nom ${req.query.name} mais dans la requete post`)
    });

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

    this.app.post('/characters', (req, res) => {
      console.log("request GET /characters sans param");
      const cards_res = this.db_mongo.collection('Character')
      console.log("req body")
      console.log(req.query)
      console.log(req.params.name)
      console.log(req.query.name)
      const response = {
        queryName:req.query.queryname
      };
      if (response.queryName)
      {
         console.log(`il y a eu un parametre : ${(response.queryName)}`)
         cards_res.find({"queryName" : response.queryName}).toArray((err, items) => {
          // console.log(items)
          res.send(items)
          })
      } else 
      {
        cards_res.find().toArray((err, items) => {
          // console.log(items)
          res.send(items)
        })
      }
    });

    this.app.post('/objects', (req, res) => {
        console.log("request POST /objects");
      // res.send("request GET /objects");
      console.log("req body")
      console.log(req.body)
      console.log(req.query)
      console.log(req.params.name)
      console.log(req.query.name)
      const cards_res = this.db_mongo.collection('Object')
        cards_res.find().toArray((err, items) => {
          // console.log(items)
          res.send(items)
      })
    });

    this.app.post('/objects/:name', (req, res) => {
        console.log("request POST /objects");
      // res.send("request GET /objects");
      console.log("req body")
      console.log(req.body)
      console.log(req.query)
      console.log(req.params.name)
      console.log(req.query.name)
      const entryGiven = req.params.name
      if (entryGiven == undefined) {
          res.status(404).send("Not entry given ...");
      }

      const cards_res = this.db_mongo.collection('Object')
        cards_res.find({ queryName: entryGiven }).toArray((err, items) => {
          // console.log(items)
          res.send(items)
      })
    });

  }
}

module.exports = Setters
