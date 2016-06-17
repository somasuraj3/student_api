var db_url = process.env.DBURL || 'ec2-54-242-156-243.compute-1.amazonaws.com:27017';

module.exports = {
	url : 'mongodb://' + db_url + '/jsdemo_student_master'
}