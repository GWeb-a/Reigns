var path = require('path');

class   UpdateRequest {
  constructor(app, db_mongo) {
    this.app = app;
    this.db_mongo = db_mongo;
    this.defineUpdateRequest()
    console.log("dans le constructeur de updaterequest")
    console.log(typeof(app))
  }

  defineUpdateRequest() {
    this.app.put('/', (req, res) => {
    	var theDate = new Date()
    	//res.send('Hello World!\nthis is a put request' + 'And it is :' + theDate + '\nThere is no route for /')
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });

	this.app.put('/cards/:name', (req, res) => {
        console.log("request PUT /cards with a parameter");
        console.log("req body")
        console.log(req.body)
        // console.log(req);
        // console.log(req.query)
        // console.log(req.query.name)
        const entryGiven = req.query.name
        if (req.query.name == "") {
          res.status(404).send("Not entry given ...");
        }
        // res.send(`Je vais renvoyer la carte qui porte le nom ${req.query.name}`)
        const cards_res = this.db_mongo.collection('cards')
        console.log("affichage de ce qui est demandé")
        console.log(cards_res.find({ name: entryGiven }));

        cards_res.find({ name: entryGiven }).toArray((err, items) => {
          res.send(items)
        })
    });

	this.app.put('/cards', (req, res) => {
        console.log("request PUT /cards et futur put card name");
        console.log(req.query);
        console.log(req.route);
        console.log(req.body)
        //const queryGiven = req.query["name"]
        //console.log("la query donné : ", queryGiven)
        const cards_res = this.db_mongo.collection('cards')
        cards_res.find({}, { _id: 0 }).toArray((err, items) => {
          // -> here it send all the cards
          res.send(items)
        })
    });

	this.app.put('/ends', (req, res) => {
        console.log("request PUT /ends");
        console.log(req.body)
        const cards_res = this.db_mongo.collection('End')
        cards_res.find().toArray((err, items) => {
          // console.log(items)
          res.send(items)
      })
      // res.send(all_cards);
    });

    this.app.put('/ends/:name', (req, res) => {
        console.log("request PUT /ends");
        console.log(req.body)
        const cards_res = this.db_mongo.collection('End')
        
        const entryGiven = req.query.name
        if (req.query.name == "") {
          res.status(404).send("Not entry given ...");
        }

        cards_res.find({ name: entryGiven }).toArray((err, items) => {
          // console.log(items)
          res.send(items)
      })
      // res.send(all_cards);
    });

    this.app.put('/characters', (req, res) => {
      console.log("request PUT /characters sans param");
      const cards_res = this.db_mongo.collection('Character')
      console.log("req body")
      console.log(req.body)
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

    this.app.put('/characters/:name', (req, res) => {
        console.log("request PUT /characters/name avec param");
        console.log("req body")
        console.log(req.body)
        console.log(req.query)
        console.log(req.params.name)
        console.log(req.query.name)
       
        const entryGiven = req.params.name
        if (entryGiven == "") {
          res.status(404).send("Not entry given ...");
        }
        // res.send(`Je vais renvoyer la carte qui porte le nom ${req.query.name}`)
        const cards_res = this.db_mongo.collection('Character')
        cards_res.find({ queryName: entryGiven }).toArray((err, items) => {
        //     // console.log(items)
          res.send(items)
        })
    });

    this.app.put('/objects', (req, res) => {
        console.log("request PUT /objects");
        console.log(req.body)
      	const cards_res = this.db_mongo.collection('Object')
        cards_res.find().toArray((err, items) => {
      		// console.log(items)
      		res.send(items)
    	})
    });

    this.app.put('/objects/:name', (req, res) => {
        console.log("request PUT /objects");
        console.log(req.body)
      	const entryGiven = req.params.name
      	if (entryGiven == "") {
      	    res.status(404).send("Not entry given ...");
      	}
      	const cards_res = this.db_mongo.collection('Object')
        cards_res.find({ queryName: entryGiven }).toArray((err, items) => {
          // console.log(items)
          res.send(items)
      })
    });

    this.app.put('/tituty', (req, res) => {
        console.log("request PUT /objects");
        const cards_res = this.db_mongo.collection('Object')
        cards_res.find().toArray((err, items) => {
              // console.log(items)
              res.send(items)
        })
    });

    // this.app.put('/toto', (req, res) => {
    //   let vartest = "toto"
    //   console.log("reques test toto");
    //   res.send(`Je vais renvoyer la carte qui porte le nom ${vartest} mais dans la requete post`)
    // });

    // this.app.post('/cards', (req, res) => {
    //     console.log("request POST /cards with a parameter");
    //     console.log("req body")
    //     console.log(req.body)
    //     console.log(req.query)
    //     console.log(req.query.name)
    //     res.send(`Je vais renvoyer la carte qui porte le nom ${req.query.name} mais dans la requete post`)
    // });
  }
}

module.exports = UpdateRequest
