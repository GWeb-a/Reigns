# Reigns
Refonte du jeu Reigns en version mobile

## Partie back office
Pour faire fonctionner la partie back office de notre application, il faut tout d'abord installer le SGDB utilisé par celui ci: Mongo db 
par exemple pour ubuntu
cf: la procédure sur le site mongo db

Ensuite il faut démarrer le serveur du sgdb
par exemple sur ubuntu : 
```
$> sudo service mongod start
```
et pour savoir si le serveur tourne bien
```
$> sudo service mongod status
```
ensuite il faut importer notre base de donnée qui se trouve dans le dossier corespondant du repository:

## Node js
notre back office fut réalisé sur node js avec la bibliothèque Express
apres avoir cloné le depot avec :
```
$> git clone git@github.com:GWeb-a/Reigns.git
```
il faut installer NPM (le gestionnaire de packet et node js)
par exemple pour ubuntu
```
$> sudo apt-get install npm
```
ensuite dans le dépot il suffit de faire un : 
```
$> npm install
```
et ensuite de démarrer le server:
```
$> node index.js
```
###  pour le développement
nous pouvons utiliser nodemon, qui permet de redémarrer automatiquement le sezrver lorsque l'on modifie un fichier, pour cela il faut installer le packet correspondant.
```
$> npm install -g nodemeon
```
et il suffit juste de démarrer le server nodemon:
```
$> nodemon
```
