var path = require('path');

class   DeleteRequest {
  constructor(app, db_mongo) {
    this.app = app;
    this.db_mongo = db_mongo;
    this.defineDeleteRequest()
    console.log("dans le constructeur de delete request")
    console.log(typeof(app))
  }

  defineDeleteRequest() {
    this.app.delete('/', (req, res) => {
      console.log("request DELETE /");
    	var theDate = new Date()
    	//res.send('Hello World!\nthis is a get request' + 'And it is :' + theDate + '\nThere is no route for /')
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    this.app.delete('/objects', (req, res) => {
        console.log("request DELETE /objects");
    	// res.send("request GET /objects");
    	
      const cards_res = this.db_mongo.collection('Object')
        cards_res.find().toArray((err, items) => {
      		// console.log(items)
      		res.send(items)
    	})
    });

    this.app.delete('/objects/:name', (req, res) => {
        console.log("request DELETE /objects");
      // res.send("request GET /objects");
      
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

    this.app.delete('/tituty', (req, res) => {
        console.log("request DELETE /objects");
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

module.exports = DeleteRequest
