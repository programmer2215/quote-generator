


document.addEventListener("DOMContentLoaded", function(){
    import * as quotes_obj from './quotes.json'
    var index = Math.floor(Math.random() * 100);
    var quote = quotes_obj[index];
    alert(quote)
    document.querySelector("blockquote").innerHTML = "sdhgkjhdksa";
});