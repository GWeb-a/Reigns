/*
* @Author: Baptiste Bertrand-Rapello
* @Date:   2019-10-03 11:34:19
* @Last Modified by:   Baptiste Bertrand-Rapello
* @Last Modified time: 2020-02-02 22:09:05
*/

const Init = require('./init.js')
const Getters = require('./routes/getters.js')
const Setters = require('./routes/setters.js')
const Updaters = require('./routes/updaters.js')
const UpdateReq = require('./routes/updateRequest.js')
const MongoUtil = require('./mongoUtil.js');
const bodyParser = require('body-parser');

const express = require('express')

glb = new Init(5001, 'localhost', 'mongodb://localhost/cards');
mongo = new MongoUtil(glb);
app = express();
app.use(bodyParser.urlencoded({ extended: true }));

/* Lancement du serveur */
mongo.connectToServer( (err, client) => {
  if (err) console.log(err);

  /* On crée les routes et on les met à disposition */
  var getters = new Getters(app, mongo.getDb())
  var setters = new Setters(app, mongo.getDb())
  //var updaters = new Updaters(app, mongo.getDb())
  var uprequest = new UpdateReq(app, mongo.getDb())
  console.log("*** you can now connect to the api ***")
} );

/* On écoute le serveur */
app.listen(glb.getPort(), () => {
	var theDate = new Date()
  console.log(`Example app listening on port ${glb.getPort()}!`)
	console.log('the server has started');
	console.log("the server started at : " + theDate)
});
