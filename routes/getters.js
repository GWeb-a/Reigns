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

    this.app.get('/apidoc/index.html', (req, res) => {
      var theDate = new Date()
      //res.send('Hello World!\nthis is a get request' + 'And it is :' + theDate + '\nThere is no route for /')
      res.sendFile(path.join(__dirname, '../public/apidoc/index.html'));
    });

    /**
    * @api {get} /cards/:name Request a specific card information according to the name
	* @apiName GetCardsInfo
    *
    * @apiParam {String} name of the card.
    *
    * @apiSuccess {json} card information
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *     {
    *       "firstname": "ceci est a ",
    *       "lastname": "changer"
    *     }
    *
    */

    this.app.get('/cards/:name', (req, res) => {
        console.log("request GET /cards with a parameter");
        console.log("req body")
        console.log(req);
        console.log(req.query)
        console.log(req.query.name)
        const entryGiven = req.query.name
        if (req.query.name == undefined) {
          res.status(404).send("Not entry given ...");
        }
        // res.send(`Je vais renvoyer la carte qui porte le nom ${req.query.name}`)
        const cards_res = this.db_mongo.collection('cards')
        cards_res.find({ name: entryGiven }).toArray((err, items) => {
        //     // console.log(items)
          res.send(items)
        })
        // res.send(all_cards);
    });

    /**
     * @api {get} /cards Request all cards information
	 * @apiName GetCardsAll
     *	 
     * @apiSuccess {json} Cards contain all the data
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "_id" : "id",
     *       "name" : "The name of the card",
     *       "character" : "The character's name",
     *       "description" : "description",
     *       "answer-yes" : "answer when swap right",
     *       "answer-no" : "answer when swap left",
     *       "effect-generale" : {
     *           "religion" : 0.0,
     *           "armé" : 0.0,
     *           "population" : 0.0,
     *           "argent" : 0.0
     *       },
     *       "effect-yes" : {
     *           "religion" : 0.0,
     *           "armé" : 0.0,
     *           "population" : 0.0,
     *           "argent" : 10.0
     *       },
     *       "effect-no" : {
     *           "religion" : 0.0,
     *           "armé" : 0.0,
     *           "population" : 0.0,
     *           "argent" : 0.0
     *       },
     *       "condition" : {
     *           "religion" : 10.0,
     *           "armé" : 0.0,
     *           "population" : 0.0,
     *           "argent" : 0.0
     *       },
     *       "nextCard" : {
     *           "yes" : "the link to the next card (not mandatory)",
     *           "no" : "the link to the next card (not mandatory)"
     *       },
     *       {}
     *     }
     *
     */
    this.app.get('/cards', (req, res) => {
        console.log("request GET /cards et futur get card name");
        console.log(req.query);
        console.log(req.route);
        //const queryGiven = req.query["name"]
        //console.log("la query donné : ", queryGiven)
        const cards_res = this.db_mongo.collection('cards')
        cards_res.find({}, { _id: 0 }).toArray((err, items) => {
          // -> here it send all the cards
          res.send(items)
        })
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

    this.app.get('/characters/:name', (req, res) => {
        console.log("request GET /characters/name avec param");
        console.log("req body")
        console.log(req.query)
        console.log(req.params.name)
        console.log(req.query.name)
       
        const entryGiven = req.params.name
        if (entryGiven == undefined) {
          res.status(404).send("Not entry given ...");
        }
        // res.send(`Je vais renvoyer la carte qui porte le nom ${req.query.name}`)
        const cards_res = this.db_mongo.collection('Character')
        cards_res.find({ queryName: entryGiven }).toArray((err, items) => {
        //     // console.log(items)
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

    this.app.get('/tituty', (req, res) => {
        console.log("request GET /objects");
        // res.send("request GET /objects");
        const cards_res = this.db_mongo.collection('Object')
        cards_res.find().toArray((err, items) => {
              // console.log(items)
              res.send(items)
        })
    });

    // this.app.get('/toto', (req, res) => {
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

module.exports = Getters
