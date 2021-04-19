var EventSource = require("eventsource");


exports.Comment = function (req, res, next) {
    res.writeHead(200, {
        'Connection': 'keep-alive',
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache'
    });
    var source = new EventSource("https://streaming-graph.facebook.com/" + req.params.id + "/live_comments?access_token=EAAEIu7m1xbkBAF5e8paZC6SIEzdMiLa9J5ZAcBx4aMfwFeaDe1CYzZCJX7jpKdBspt1GITUDedwI32bhqsKGWztznNWTy8VQlttbFZCV7ZB2MvJyO647U7l4qqeGFWy40chMtVIQieBOAJiLqBXA9YYawsUKq41oV9ymLMEsKtwZDZD&comment_rate=one_per_two_seconds&fields=from{id},message");
    source.onmessage = function (event) {
        var jdata = JSON.parse(event.data);
        console.log('json : ', jdata)
        res.write('data: {"msg": ' + jdata.message + ' "id": ' + jdata.id + '}\n\n');

    };

    source.onerror = function (event) {
        console.log('error : ', event);
    };
};