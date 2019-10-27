class   Getters {
  constructor(app, db_mongo) {
    this.app = app;
    this.db_mongo = db_mongo;
    this.defineGetters()
  }

  defineGetters() {
    this.app.get('/', (req, res) => {
    	var theDate = new Date()
    	res.send('Hello World!\nthis is a get request' + 'And it is :' + theDate + '\nThere is no route for /')
    });

    this.app.get('/cards', (req, res) => {
        console.log("request GET /cards");
        const cards_res = this.db_mongo.collection('cards')
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
