var path = require('path'),
	fs = require('fs'),
	//md5 = require('MD5'),
	//Employee = require('../models/employee');
	StudentModel = require('../models/student'); 

	module.exports = {

	list: function(req,res){
		res.json({'Name':'Suraj Soma'});
	}

	/*	
	list: function(req,res){
		console.log('in home controller');
		students = [];
		StudentModel.find({},{},function(error,studs){
			if(error){throw error;}
			students = studs;
			console.log('student list');
			res.json(students);	
		});
	},
	

	get: function(req,res){
		console.log('in home controller');
		StudentModel.findOne({id:req.params.id},function(err,student){
			if(err){ throw err; }
			res.json(student);
		});
	},

	create: function(req,res){
		console.log('hello in create function');
		console.log('creating student data');
		console.log('req.body.id : ' + req.body.id);
		console.log('req.body.name : ' + req.body.name);
 		
 		var newStudent = new StudentModel({
				id: req.body.id,
				name: req.body.name
				});
		newStudent.save(function(err, student) {
				res.json(student);
 		});
	},

	remove: function(req,res){
		console.log('hello in remove function');
		console.log(req);
		StudentModel.findOne({id:req.params.id},function(err,student){
			if(err){ throw err; }
			StudentModel.remove({id:req.params.id},function(err,student){
				console.log('Product removed ' + student);
				res.json(true);
			});				
		});
	}
	*/
};
