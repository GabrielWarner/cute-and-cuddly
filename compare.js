var dogImage = document.getElementsByClassName("card-image-2")
var dogsName = docment.getElementsbyId("dogNameApi")


function rndmDog(){

    var dogAPI = "3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854"
    var requestUrl = 'https://api.thedogapi.com/v1/breeds/search?q=""&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854';
  
    fetch(requestUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data) //test
        var newDiv = document.createElement('div')
        div.textContent = data[0].name
        dogsName.append(div)
        
        //grab image id and then fetch image
        function renderimage(data){
          var imgID = data[0].reference_image_id
        
          
          var requestUrl = 'https://api.thedogapi.com/v1/images/' + imgID;
          
          fetch(requestUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              imgURL = data.url
              console.log(data)
              var image = document.createElement("img")
              image.setAttribute("src", imgURL)
              catImage.append(image)
            });
        }
        renderimage(data)
      });
  }