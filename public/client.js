var socket = io();

var connectionCount = document.getElementById('connection-count');

socket.on('usersConnected', function (count) {
  connectionCount.innerText = 'Connected users: ' + count;
});

var statusMessage = document.getElementById('status-message');

socket.on('statusMessage', function (message) {
  statusMessage.innerText = message;
});

var myVote = document.getElementById('my-vote');

socket.on('voteTracker', function (message) {
  myVote.innerText = "you voted for " + message
});

var aVotes = document.getElementById('A-votes');
var bVotes = document.getElementById('B-votes');
var cVotes = document.getElementById('C-votes');
var dVotes = document.getElementById('D-votes');

socket.on('voteCount', function(vote) {
  aVotes.innerText = "A: " + vote["A"]
  bVotes.innerText = "B: " + vote["B"]
  cVotes.innerText = "C: " + vote["C"]
  dVotes.innerText = "D: " + vote["D"]
});

var buttons = document.querySelectorAll('#choices button');

for (var i=0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    socket.send('voteCast', this.innerText);
  })
}

