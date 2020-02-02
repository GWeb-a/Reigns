var path = require('path');

class   Getters {
  constructor(app, db_mongo) {
    this.app = app;
    this.db_mongo = db_mongo;
    this.defineGetters()
  }

  defineGetters() {
    this.app.get('/', (req, res) => {
    	var theDate = new Date()
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    this.app.get('/apidoc/index.html', (req, res) => {
      var theDate = new Date()
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
        console.log(req.params.name)
        const entryGiven = req.params.name

        if (req.params.name == "") {
          res.status(404).send("Not entry given ...");
        }
        const cards_res = this.db_mongo.collection('cards')
        cards_res.find({ queryName: entryGiven }, { projection: { _id: 0}}).toArray((err, items) => {
          res.send(items)
        })
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
        const cards_res = this.db_mongo.collection('cards')

      const response = {
        queryName:req.query.queryname
      };
      if (response.queryName)
        {
           console.log(`il y a eu un parametre : ${(response.queryName)}`)
           cards_res.find({"queryName" : response.queryName}, { projection: { _id: 0}}).toArray((err, items) => {
            res.send(items)
            })
        } 
      else 
        {
          console.log("il n'y a pas eu de parametre")
          cards_res.find({}, { projection: { _id: 0}}).toArray((err, items) => {
            res.send(items)
          })
        }


    });

    this.app.get('/ends', (req, res) => {
        console.log("request GET /ends (?)");
        const cards_res = this.db_mongo.collection('End')

        const response = {
          queryName:req.query.queryname
        };
        if (response.queryName)
        {
           console.log(`il y a eu un parametre : ${(response.queryName)}`)
           cards_res.find({"queryName" : response.queryName}, { projection: { _id: 0}}).toArray((err, items) => {
            res.send(items)
            })
        } 
        else 
        {
        console.log("il n'y a pas eu de parametre")
        cards_res.find({}, { projection: { _id: 0}}).toArray((err, items) => {
          res.send(items)
        })
        }
    });

    this.app.get('/ends/:name', (req, res) => {
        console.log("request GET /ends avec param");
        const cards_res = this.db_mongo.collection('End')
        console.log(req.params.name)
        const entryGiven = req.params.name
        console.log("donnée recu : ", req.params.name)
        if (req.params.name == "") {
          res.status(404).send("Not entry given ...");
        }
        console.log("received data")
        cards_res.find({ queryName: entryGiven },  {'_id': false} ).toArray((err, items) => {
          res.send(items)
      })
    });

    this.app.get('/characters', (req, res) => {
      console.log("request GET /characters sans param");
      const cards_res = this.db_mongo.collection('Character')
      console.log(req.query.name)
      const response = {
        queryName:req.query.queryname
      };
      if (response.queryName)
        {
           console.log(`il y a eu un parametre : ${(response.queryName)}`)
           cards_res.find({"queryName" : response.queryName}, { projection: { _id: 0}}).toArray((err, items) => {
            res.send(items)
            })
        } 
      else 
        {
          console.log("il n'y a pas eu de parametre")
          cards_res.find({}, { projection: { _id: 0}}).toArray((err, items) => {
            res.send(items)
          })
        }
    });

    this.app.get('/characters/:name', (req, res) => {
        console.log("request GET /characters/name avec param");
        console.log(req.params.name)

        const entryGiven = req.params.name
        if (entryGiven == "") {
          res.status(404).send("Not entry given ...");
        }
        const cards_res = this.db_mongo.collection('Character')
        cards_res.find({ queryName: entryGiven }, { projection: { _id: 0}}).toArray((err, items) => {
          res.send(items)
        })
    });

    this.app.get('/objects', (req, res) => {
        console.log("request GET /objects");
        const cards_res = this.db_mongo.collection('Object')

        console.log(req.query.queryname)
        const response = {
          queryName:req.query.queryname
        };
        if (response.queryName)
          {
           console.log(`il y a eu un parametre : ${(response.queryName)}`)
           cards_res.find({"queryName" : response.queryName}, { projection: { _id: 0}}).toArray((err, items) => {
            res.send(items)
            })
          } 
          else
          {
           console.log("il n'y a pas eu de parametre dans request GET /objects")

          cards_res.find({}, { projection: { _id: 0}}).toArray((err, items) => {
      		  res.send(items)
    	    })
        }
    });

    this.app.get('/objects/:name', (req, res) => {
        console.log("request GET /objects");
        // res.send("request GET /objects");
        console.log(req.params)
        const entryGiven = req.params.name
        console.log(entryGiven)
        if (entryGiven == "") {
            res.status(404).send("Not entry given ...");
        }
        const cards_res = this.db_mongo.collection('Object')
        cards_res.find({ queryName: entryGiven }, { projection: { _id: 0}}).toArray((err, items) => {
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

  }
}

module.exports = Getters
