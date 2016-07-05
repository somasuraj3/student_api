var AWS= require('aws-sdk');

var ecs = new AWS.ECS({region: 'us-east-1'});


var params = {
  containerDefinitions: [ 
    {
      cpu: 1,
      essential: true,
      image: 'docker.io/somasuraj/studentapi:4.3',
      memory: 512,
      name: 'Student',
      portMappings: [
        {
          containerPort: 80,
          hostPort: 80,
          protocol: 'tcp'
        },
      ],
    },
  ],
  family: 'StudentAPI', 
};

ecs.registerTaskDefinition(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     {
	console.log(data); 
	console.log('task definition updated successfuly');


	var params = {
  		service: 'StudentService',
  		cluster: 'student-ecs-cluster',
  		desiredCount: 0,
	  	taskDefinition: 'StudentAPI'
		};
	ecs.updateService(params, function(err, data) {
		 if (err) console.log(err, err.stack); // an error occurred
		 else   {  console.log(data);           // successful response
				console.log('service updated successfuly');
			}
		});
	  }          // successful response
});

//console.log('task definition updated successful !!!');

/*

var params = {
  service: 'StudentService',
  cluster: 'student-ecs-cluster',
  desiredCount: 0,
  taskDefinition: 'StudentAPI'
};
ecs.updateService(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});


console.log('service updated successfully');

*/

/*
var s3 = new AWS.S3();

s3.listBuckets(function(err, data) {
  if (err) { console.log("Error:", err); }
  else {
    for (var index in data.Buckets) {
      var bucket = data.Buckets[index];
      console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
    }
  }
});
*/

//https://s3.amazonaws.com/sample-us-east-1-918540139020/sample-object.json


