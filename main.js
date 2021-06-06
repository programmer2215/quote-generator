


async function get_data(){
    var response = await fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((data) => {
        return data;
    })

    var index = Math.floor(Math.random() * 100 );
    var quote_json = response[index];
    const quote = quote_json.text;
    const author = quote_json.author;
    document.getElementById('quote-box').innerHTML =  `${quote} <br> <hr> <b><i> ${author} </i></b>`
    

    
    
}

    



document.addEventListener("DOMContentLoaded", function(){
   get_data();

    
    //var quote = data_json.data[index].quote;
    
});