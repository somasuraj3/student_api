var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	path = require('path');

var StudentSchema = new Schema({
	id : {type:Number},
	name : {type:String},
});


module.exports = mongoose.model('Student', StudentSchema);
