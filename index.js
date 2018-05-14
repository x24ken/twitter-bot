var Twitter = require('twitter');

var twitter = new Twitter({
    consumer_key: 'ほにゃらら',
    consumer_secret: 'ほにゃら',
    access_token_key: 'ほにゃらら',
    access_token_secret: 'ほにゃらら'
});

var quotes = [
    "ワン！",
    "ワンワン！",
    "わんにゃん大戦争",
    "ワンワンマン",
    "腹減った万"
]

function main_handler(event, context) {
    var quote = quotes[Math.floor(Math.random() * quotes.length)]
    
    twitter.post('statuses/update', {status: quote}, (err, tweet, 
    response)=> {
        if (err) {
            return console.log(err)
        }else{
            return console.log(tweet)
        }
    })
    
}

exports.main_handler = main_handler;