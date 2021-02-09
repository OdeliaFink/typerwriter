const sentence = "hello there from lighthouse labs";

let timedSentence = function(words) {
let timing = 1000; 
  for (const char of sentence) {
  setTimeout(function() {
    process.stdout.write(char)
}, timing)
timing += 50
 };

 setTimeout(function() {
   console.log('')
 }, timing)
 
};



timedSentence(sentence)