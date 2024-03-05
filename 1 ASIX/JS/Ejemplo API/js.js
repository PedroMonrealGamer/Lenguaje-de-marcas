axios.get('https://api.thecatapi.com/v1/images/search?limit=10', {
    responseType: 'json',
    headers: {
      'X-Api-Key': 'live_pIoOTJR1SenD7HfpgZTKORqEuDAzyK2gcSsnESQUU2n6RYV78asTVbCmOi96JxiR'
    }
})
.then(function (res) {
    console.log(res);
    mostrarfoto(res.data);
})
.catch(function (err) {
    console.log(err);
});

function mostrarfoto(data){
    var div = document.getElementById("div");
    for (var i = 0; i < 2; i++) {
        var img = document.createElement("img");
        img.src = data[i].url;
        img.alt = "Imagen";
        div.appendChild(img);        
    }
}
