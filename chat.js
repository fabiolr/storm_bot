var wit = require('node-wit');

var ACCESS_TOKEN = "U7AMRYMIGNW3GLBIDYVEKXHAAIERNMMN";
wit.captureTextIntent(ACCESS_TOKEN, "Book the conference room for tomorrow 10am", function (err, res) {
    console.log("Response from Wit for text input: ");
    if (err) console.log("Error: ", err);
    console.log(JSON.stringify(res, null, " "));
});



var SlackClient = require('slack-client');

var slackClient = new SlackClient("xoxb-33860512418-twF1WVZkDaqKuWzJoRc3wzGe");

var bot; // Track bot user .. for detecting messages by yourself

slackClient.on('loggedIn', function(user, team) {
    bot = user;
    console.log("Logged in as " + user.name
        + " of " + team.name + ", but not yet connected");
});

slackClient.on('open', function() {
    console.log('Connected');
});

slackClient.on('message', function(message) {
    if (message.user == bot.id) return; // Ignore bot's own messages

    var channel = slackClient.getChannelGroupOrDMByID(message.channel);
    channel.send('Hello world!');

    // More goes here later..
});

slackClient.login();




