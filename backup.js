require('dotenv/config');
var spawn = require('child_process').spawn;

var args = [process.env.DUMP_URL]
// var args = ['mongodb://mylogin:mypass@myip:27017/mycollection?retryWrites=true&w=majority&authSource=admin']
// var args = ['mongodb+srv://mylogin:mypass@mycluster.mongodb.net/mycollection?retryWrites=true&w=majority']

var mongodump = spawn('./mongodump', args);
// var mongodump = spawn('C:/Program Files/MongoDB/Tools/100/bin/mongodump', args);

mongodump.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});
mongodump.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});
mongodump.on('exit', function (code) {
  console.log('mongodump exited with code ' + code);
});