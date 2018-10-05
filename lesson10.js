var net = require('net');
var portNumber = process.argv[2];

var server = net.createServer(function(socket) {
  var date = formattedDate();
  socket.end(date + '\n');
});
server.listen(portNumber);

function formattedDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = getFormattedMonth(date);
  var day = getFormattedDay(date);
  var time = getFormattedTime(date);
  return year + '-' + month + '-' + day + ' ' + time;
}

function getFormattedMonth(date) {
  var month = date.getMonth() + 1;
  month = shouldAddZero(month);
  return month;
}

function getFormattedDay(date) {
  var day = date.getDate();
  day = shouldAddZero(day);
  return day;
}

function shouldAddZero(input) {
  if (input < 10) {
    input = input.toString().split();
    input.unshift('0');
    input = input.join('');
  }
  return input;
}

function getFormattedTime(date) {
  return date.toTimeString().split(' ')[0].split(':').splice(0, 2).join(':');
}
