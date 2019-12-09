var path = require('path');

class   Getters {
  constructor(app, db_mongo) {
    this.app = app;
    this.db_mongo = db_mongo;
    this.defineGetters()
    console.log("dans le constructeur de getter")
    console.log(typeof(app))
  }

  defineGetters() {
    this.app.get('/', (req, res) => {
    	var theDate = new Date()
    	//res.send('Hello World!\nthis is a get request' + 'And it is :' + theDate + '\nThere is no route for /')
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    this.app.get('/cards/:name', (req, res) => {
        console.log("request GET /cards with a parameter");
        console.log("req body")
        console.log(req.query)
        console.log(req.query.name)
        res.send(`Je vais renvoyer la carte qui porte le nom ${req.query.name}`)
        const cards_res = this.db_mongo.collection('cards')
        cards_res.find().toArray((err, items) => {
      //     // console.log(items)
      //     res.send(items)
      })
      // res.send(all_cards);
    });

    this.app.get('/cards', (req, res) => {
        console.log("request GET /cards");
        // console.log(req)
        console.log(req.route);
        const cards_res = this.db_mongo.collection('cards')
        cards_res.find({}).toArray((err, items) => {
          // console.log(items)
          res.send(items)
      })
      // res.send(all_cards);
    });

    this.app.get('/ends', (req, res) => {
        console.log("request GET /ends");
        const cards_res = this.db_mongo.collection('End')
        cards_res.find().toArray((err, items) => {
          // console.log(items)
          res.send(items)
      })
      // res.send(all_cards);
    });

    this.app.get('/characters', (req, res) => {
        console.log("request GET /characters");
    	// res.send("request GET /characters");
    	const cards_res = this.db_mongo.collection('Character')
        cards_res.find().toArray((err, items) => {
      		// console.log(items)
      		res.send(items)
    	})
    });

    this.app.get('/objects', (req, res) => {
        console.log("request GET /objects");
    	// res.send("request GET /objects");
    	const cards_res = this.db_mongo.collection('Object')
        cards_res.find().toArray((err, items) => {
      		// console.log(items)
      		res.send(items)
    	})
    });
  }
}

module.exports = Getters
