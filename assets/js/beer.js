 $("#beerButton").on("click", function(){
  beerSearchVal = $("#searchBeer").val().trim();



  var queryURL = "https://api.brewerydb.com/v2/search?q="+ beerSearchVal +"&type=beer&key=19168d0b6f6ee2f248cb255e94cf89bc";

var beerSearchVal = beerSearchVal.split(' ').join('_');
           $.ajax({
      url: queryURL,
      method: 'GET'
    })
        .done(function(response) {
         console.log(response);
         for (var i = 0; i < response.data.length; i++) {
                console.log(response.data[i].name);
                console.log(response.data[i].labels);
                console.log(response.data[i].style.name);
                console.log(response.data[i].description);
                console.log(response.data[i].abv);

           } 

           var getBeerName = $('<p>').html(response.data[0].name);
            $("#beerName").html(getBeerName);
            $("#beerLogo").html("<img src=" + response.data[0].labels.icon +" >");
            var getBeerStyle = $('<label>').html(response.data[0].style.name);
              $("#beerStyle").html(getBeerStyle);
            var getBeerDescription = $('<label>').html(response.data[0].description);
              $("#beerDescription").html(getBeerDescription);
              var abvLabel = $('<label>').html("ABV: "+ response.data[0].abv);
              $("#beerAbv").html(abvLabel);
              var ibuLabel = $('<label>').html("Max IBU: "+ response.data[0].style.ibuMax);
              $("#beerIbu").html(ibuLabel);
              
})

       $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('#modal1').modal();


  });
   });