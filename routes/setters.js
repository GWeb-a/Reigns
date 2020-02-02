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
              let cards_res = this.db_mongo.collection('cards')
      console.log("req body")
      console.log(req.body)
      console.log(req.query)
      console.log(req.params.name)
      console.log(req.query.name)
      const question = {
        queryName:req.body.queryName,
        name: req.body.name,
        character: req.body.character,
        description: req.body.description,
        answer_yes: req.body.yes,
        answer_no: req.body.no,
        "effect_generale": req.body.effectgen,
        "effect_yes":req.body.effectyes,
        "effect_no":req.body.effectno,
        "condition":req.body.condition,
        "nextCard":req.body.nextcard
      };
      console.log(question)
      if (question.name == undefined || 
          question.queryName == undefined || 
          question.character == undefined || 
          question.description == undefined)
        {  
          console.log("missing some parameter")
          res.status(404).send('missing some parameter. mandatory parameters : desfr, name, queryname, img')
      }
      else (question)
      {
         console.log(`il y a eu un parametre : ${(question.queryName)}`)
         console.log("je ninser rien pour le moment")
         console.log(question["description-fr"])
         cards_res.insertOne(question, function(err, resdb) {
           if (err) throw err;
            console.log("correctement inseré : ", question)
            cards_res.find({"queryName" : question.queryName}, {_id: 0 }).toArray((err, items) => {
              res.send(items)
            });
          });
      }

        //res.send(`Je vais renvoyer la carte qui porte le nom ${req.query.name} mais dans la requete post`)
    });

    // this.app.post('/cards:name?', (req, res) => {
    //     console.log("request POST /cards with a parameter");
    //     console.log("req body")
    //     console.log(req.body)
    //     console.log(req.query)
    //     console.log(req.query.name)
    //     res.send(`Je vais renvoyer la carte qui porte le nom ${req.query.name} mais dans la requete post`)
    //     //   const cards_res = this.db_mongo.collection('cards')
    //     //   cards_res.find().toArray((err, items) => {
    //     //     // console.log(items)
    //     //     res.send(items)
    //     // })
    //     // res.send(all_cards);
    // });

    this.app.post('/characters', (req, res) => {
      console.log("request POST /characters ");
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
      if (question.name == undefined || question.queryName == undefined || question.img === undefined)
        {  
          console.log("missing some poarameter")
          res.status(404).send('missing some parameter. mandatory parameters : name, queryname, img')
      }
      else
      {
         console.log(`il y a eu un parametre : ${(question.queryName)}`)
         //cards_res.insert
           // db.collection("customers").insertOne(myobj, function(err, res) {
           //    if (err) throw err;
           //     console.log("1 document inserted");
           //      db.close();
           //  });
           /*ICI je rajoute un characters */
         cards_res.insertOne(question, function(err, resdb) {
           if (err) throw err;
            console.log("correctement inseré")
            cards_res.find({"queryName" : question.queryName}, {_id: 0 }).toArray((err, items) => {
              res.send(items)
            });
          });
      }
      // else 
      // {
      //   cards_res.find().toArray((err, items) => {
      //     // console.log(items)
      //     res.send(items)
      //   })
      // }
    });

    // nous n'avons pas besoin de le faire dans l'url car tout doit passr par le body
    // en cours
    // this.app.post('/characters/:name', (req, res) => {
    //     console.log("request POST /characters/name avec param");
    //     console.log("req body")
    //     console.log(req.body)
    //     console.log(req.query)
    //     console.log(req.params.name)
    //     console.log(req.query.name)
       
    //     const entryGiven = req.params.name
    //     if (entryGiven == "") {
    //       res.status(404).send("Not entry given ...");
    //     }
    //     // res.send(`Je vais renvoyer la carte qui porte le nom ${req.query.name}`)
    //     const cards_res = this.db_mongo.collection('Character')
    //     cards_res.find({ queryName: entryGiven}, {_id: 0 }).toArray((err, items) => {
    //     //     // console.log(items)
    //       res.send(items)
    //     })

    // });

    this.app.post('/objects', (req, res) => {
        console.log("request POST /objects");
        // res.send("request GET /objects");
        console.log("req body")
        console.log(req.body)
        console.log(req.query)
        console.log(req.params.name)
        console.log(req.query.name)
        const cards_res = this.db_mongo.collection('Object')
      const question = {
        queryName:req.body.queryName,
        name: req.body.name,
        description: req.body.description,
        effect: req.body.effect,

      };
      console.log(question)
      if (question.name == undefined || 
          question.queryName == undefined || 
          question.description === undefined)
        {  
          console.log("missing some parameter")
          res.status(404).send('missing some parameter. mandatory parameters : desfr, name, queryname, img')
      }
      else (question)
      {
        console.log(`il y a eu un parametre : ${(question.queryName)}`)
         console.log("je ninser rien pour le moment")
         cards_res.insertOne(question, function(err, resdb) {
           if (err) throw err;
            console.log("correctement inseré : ", question)
            cards_res.find({"queryName" : question.queryName}, {_id: 0 }).toArray((err, items) => {
              res.send(items)
            });
          });
      }
    });

    this.app.post('/ends', (req, res) => {
      console.log("request POST /ends ");
      let cards_res = this.db_mongo.collection('End')
      console.log("req body")
      console.log(req.body)
      console.log(req.query)
      console.log(req.params.name)
      console.log(req.query.name)
      const question = {
        queryName:req.body.queryName,
        name: req.body.name,
        "description-fr": req.body.desfr,
        img: req.body.img,

      };
      console.log(question)
      if (question["description-fr"] == undefined || question.name == undefined || question.queryName == undefined || question.img === undefined)
        {  
          console.log("missing some poarameter")
          res.status(404).send('missing some parameter. mandatory parameters : desfr, name, queryname, img')
      }
      else (question)
      {
         console.log(`il y a eu un parametre : ${(question.queryName)}`)
         //cards_res.insert
           // db.collection("customers").insertOne(myobj, function(err, res) {
           //    if (err) throw err;
           //     console.log("1 document inserted");
           //      db.close();
           //  });
           /*ICI je rajoute un characters */
         console.log("je ninser rien pour le moment")
         console.log(question["description-fr"])
         cards_res.insertOne(question, function(err, resdb) {
           if (err) throw err;
            console.log("correctement inseré : ", question)
            cards_res.find({"queryName" : question.queryName}, {_id: 0 }).toArray((err, items) => {
              res.send(items)
            });
          });
      }
      // else 
      // {
      //   cards_res.find().toArray((err, items) => {
      //     // console.log(items)
      //     res.send(items)
      //   })
      // }
    });

    // this.app.post('/objects/:name', (req, res) => {
    //     console.log("request POST /objects");
    //     // res.send("request GET /objects");
    //     console.log("req body")
    //     console.log(req.body)
    //     console.log(req.query)
    //     console.log(req.params.name)
    //     console.log(req.query.name)
    //     const entryGiven = req.params.name
    //     if (entryGiven == "") {
    //         res.status(404).send("Not entry given ...");
    //     }

    //     const cards_res = this.db_mongo.collection('Object')
    //     cards_res.find({ queryName: entryGiven }).toArray((err, items) => {
    //       // console.log(items)
    //       //res.send(items)

    //       res.send(`J'ai bien recu une requete post sur objects/:name`)
    //   })
    // });

  }
}

module.exports = Setters
