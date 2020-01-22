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

    // this.app.get('/toto', (req, res) => {
    //   let vartest = "toto"
    //   console.log("reques test toto");
    //   res.send(`Je vais renvoyer la carte qui porte le nom ${vartest} mais dans la requete post`)
    // });

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
      let cards_res = this.db_mongo.collection('Character')
      console.log("req body")
      console.log(req.body)
      console.log(req.query)
      console.log(req.params.name)
      console.log(req.query.name)
      const question = {
        queryName:req.body.queryName,
        name: req.body.name,
        img: req.body.img
      };
      console.log(question)
      if (question)
      {
         console.log(`il y a eu un parametre : ${(question.queryName)}`)
         //cards_res.insert
           // db.collection("customers").insertOne(myobj, function(err, res) {
           //    if (err) throw err;
           //     console.log("1 document inserted");
           //      db.close();
           //  });
         cards_res.insertOne(question, function(err, resdb) {
           if (err) throw err;
            console.log("correctement inseré")
            cards_res.find({"queryName" : question.queryName}, {_id: 0 }).toArray((err, items) => {
              res.send(items)
            });
          });
      } else {
        res.status(200).send('no param')
      }
      // else 
      // {
      //   cards_res.find().toArray((err, items) => {
      //     // console.log(items)
      //     res.send(items)
      //   })
      // }
    });

    // en cours
    this.app.post('/characters/:name', (req, res) => {
        console.log("request POST /characters/name avec param");
        console.log("req body")
        console.log(req.body)
        console.log(req.query)
        console.log(req.params.name)
        console.log(req.query.name)
       
        const entryGiven = req.params.name
        if (entryGiven == undefined) {
          res.status(404).send("Not entry given ...");
        }
        // res.send(`Je vais renvoyer la carte qui porte le nom ${req.query.name}`)
        const cards_res = this.db_mongo.collection('Character')
        cards_res.find({ queryName: entryGiven}, {_id: 0 }).toArray((err, items) => {
        //     // console.log(items)
          res.send(items)
        })

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
          //res.send(items)

          res.send(`J'ai bien recu une requete post sur objects/:name`)
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
          //res.send(items)

          res.send(`J'ai bien recu une requete post sur objects/:name`)
      })
    });

  }
}

module.exports = Setters
