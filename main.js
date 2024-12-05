var quotes = [
   {
     text: '“Be yourself; everyone else is already taken.”',
     author: "Oscar Wilde"
   },
   {
     text: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
     author: "Marilyn Monroe"
   },
   {
     text: "“So many books, so little time.”",
     author: "Frank Zappa"
   },
   {
     text: "Success is not the key to happiness. Happiness is the key to success.",
     author: " Albert Einstein"
   },
   {
     text: "“A room without books is like a body without a soul.”",
     author: "Marcus Tullius Cicero"
   }
 ];

 var currentIndex = 0;
 function generateQuote() {
   var currentQuote = quotes[currentIndex];
   document.getElementById('quote-display').textContent = currentQuote.text;
   document.getElementById('author-display').textContent = "- " + currentQuote.author;
   currentIndex += 1;
 
   if (currentIndex >= quotes.length) {
     currentIndex = 0;
   }
 }