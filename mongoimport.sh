#! /bin/sh
mongoimport reignsdb/Character.json --collection=characters  --db=reigns
mongoimport reignsdb/End.json --collection=ends  --db=reigns
mongoimport reignsdb/Object.json --collection=objects  --db=reigns
mongoimport reignsdb/cards.json --collection=cards  --db=reigns