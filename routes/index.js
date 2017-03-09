var express = require('express');
var underscore = require('underscore');
var router = express.Router();



const KODE='TOREGARDCV';

var returjson={
    ssn : "0323232323232",
    fnavn : "Tore Gard",
    etternavn : "Andersen"
}

var feil= {
    feil: "I header maa du ha toregardcv="+KODE
}

var validtokens = ["NAV1","POLITIET1"];




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/rest', function(req, res, next) {
   function validerToken(token){
        return underscore.contains(validtokens,token);
    }

  var sjekkkode = req.header("toregardcv");
  console.log("**************"+req.get('toregardcv'))
  if(typeof sjekkkode !== 'undefined' && validerToken(sjekkkode))
  {
      res.status(202).json(returjson);
  }else {
      res.status(400).json(feil);
  }
    res.setHeader('Content-Type', 'application/json');
});

module.exports = router;
