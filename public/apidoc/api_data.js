define({ "api": [
  {
    "type": "get",
    "url": "/cards",
    "title": "Request all cards information",
    "name": "GetCardsAll",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Cards",
            "description": "<p>contain all the data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\" : \"id\",\n  \"name\" : \"The name of the card\",\n  \"character\" : \"The character's name\",\n  \"description\" : \"description\",\n  \"answer-yes\" : \"answer when swap right\",\n  \"answer-no\" : \"answer when swap left\",\n  \"effect-generale\" : {\n      \"religion\" : 0.0,\n      \"armé\" : 0.0,\n      \"population\" : 0.0,\n      \"argent\" : 0.0\n  },\n  \"effect-yes\" : {\n      \"religion\" : 0.0,\n      \"armé\" : 0.0,\n      \"population\" : 0.0,\n      \"argent\" : 10.0\n  },\n  \"effect-no\" : {\n      \"religion\" : 0.0,\n      \"armé\" : 0.0,\n      \"population\" : 0.0,\n      \"argent\" : 0.0\n  },\n  \"condition\" : {\n      \"religion\" : 10.0,\n      \"armé\" : 0.0,\n      \"population\" : 0.0,\n      \"argent\" : 0.0\n  },\n  \"nextCard\" : {\n      \"yes\" : \"the link to the next card (not mandatory)\",\n      \"no\" : \"the link to the next card (not mandatory)\"\n  },\n  {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/getters.js",
    "group": "C:\\Users\\zacharie\\Desktop\\LogicielCours\\Reigns\\Reigns\\routes\\getters.js",
    "groupTitle": "C:\\Users\\zacharie\\Desktop\\LogicielCours\\Reigns\\Reigns\\routes\\getters.js"
  },
  {
    "type": "get",
    "url": "/cards/:name",
    "title": "Request a specific card information according to the name",
    "name": "GetCardsInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>of the card.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "card",
            "description": "<p>information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"ceci est a \",\n  \"lastname\": \"changer\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/getters.js",
    "group": "C:\\Users\\zacharie\\Desktop\\LogicielCours\\Reigns\\Reigns\\routes\\getters.js",
    "groupTitle": "C:\\Users\\zacharie\\Desktop\\LogicielCours\\Reigns\\Reigns\\routes\\getters.js"
  }
] });
