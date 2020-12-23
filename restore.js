require('dotenv/config');
var spawn = require('child_process').spawn;

var args = [process.env.RESTORE_URL, 'dump']
// var args = ['mongodb://mylogin:mypass@myip:27017/mycollection?retryWrites=true&w=majority&authSource=admin', 'dump']
// var args = ['mongodb+srv://mylogin:mypass@mycluster.mongodb.net/mycollection?retryWrites=true&w=majority', 'dump']

var mongodump = spawn('./mongorestore', args);
// var mongodump = spawn('C:/Program Files/MongoDB/Tools/100/bin/mongorestore', args);

mongodump.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});
mongodump.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});
mongodump.on('exit', function (code) {
  console.log('mongodump exited with code ' + code);
});