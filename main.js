


async function get_data(){
    var response = await fetch('./quotes.json')
    .then((response) => response.json())
    .then((data) => {
        return data.data;
    })

    var index = Math.floor(Math.random() * 100 );
    var quote_json = response[index];
    const quote = quote_json.quote;
    const author = quote_json.author;
    document.getElementById('quote-box').innerHTML =  `${quote} <br> <hr> <b><i> ${author} </i></b>`
    

    
    
}

    



document.addEventListener("DOMContentLoaded", function(){
   get_data();

    
    //var quote = data_json.data[index].quote;
    
});