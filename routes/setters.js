class   Setters {
  constructor(app, db_mongo) {
    this.app = app;
    this.db_mongo = db_mongo;
    this.defineSetters()
  }

  defineSetters() {

    this.app.post('/', function (req, res) {

      	res.send('Got a POST request')
    })

    this.app.post('/save', function (req, res) {

    	res.send('Got a POST request')
    })

    this.app.post('/cards', (req, res) => {
        console.log("request POST /cards ");
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
      if (question.name == undefined || question.queryName == undefined || question.character == undefined || question.description == undefined)
        {  
          console.log("missing some parameter")
          res.status(404).send('missing some parameter. mandatory parameters : desfr, name, queryname, img')
      } else
      {
         cards_res.insertOne(question, function(err, resdb) {
           if (err) throw err;
            console.log("-> new entry put in the db", question)
            cards_res.find({"queryName" : question.queryName}, {_id: 0 }).toArray((err, items) => {
              res.send(items)
            });

          });
      }
    });

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
         cards_res.insertOne(question, function(err, resdb) {
           if (err) throw err;
            console.log("-> new entry put in the db")
            cards_res.find({"queryName" : question.queryName}, {_id: 0 }).toArray((err, items) => {
              res.send(items)
            });
          });
      }
    });



    this.app.post('/objects', (req, res) => {
        console.log("request POST /objects");
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
      else 
      {
        console.log(`il y a eu un parametre : ${(question.queryName)}`)
         console.log("je ninser rien pour le moment")
         cards_res.insertOne(question, function(err, resdb) {
           if (err) throw err;
            console.log("-> new entry put in the db", question)
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
          console.log("missing some parameter")
          res.status(404).send('missing some parameter. mandatory parameters : desfr, name, queryname, img')
      }
      else 
      {
         console.log(question["description-fr"])
         cards_res.insertOne(question, function(err, resdb) {
           if (err) throw err;
            console.log("-> new entry put in the db", question)
            cards_res.find({"queryName" : question.queryName}, {_id: 0 }).toArray((err, items) => {
              res.send(items)
            });
          });
      }
    });
  }
}

module.exports = Setters
