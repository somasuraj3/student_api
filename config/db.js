var db_url = process.env.DBURL || 'localhost:27017';

module.exports = {
	url : 'mongodb://' + db_url + '/jsdemo_student_master'
}