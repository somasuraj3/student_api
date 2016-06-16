var express = require('express');
var router = express.Router();

router.route('/students')
.get(function(req,res){
	res.json({'Name':'Parul Mann'});
})  

module.exports = router;
