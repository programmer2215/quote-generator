var quotes_obj;
fetch('./quotes.json')
.then(results => quotes_obj = results.json())
.then(console.log(quotes_obj))




document.addEventListener("DOMContentLoaded", function(){
    var index = Math.floor(Math.random() * 100);
    var quote = quotes_obj[index];
    alert(quote)
    document.querySelector("blockquote").innerHTML = "sdhgkjhdksa";
});