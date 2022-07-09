var dogsImage = document.getElementById('dogImage')
var dogsName = document.getElementById('dogNameApi')
var dogsLife = document.getElementById('dogLifeApi')
var dogsInfo = document.getElementById('dogInfoApi')
var catsImage = document.getElementById('catImage')
var catsName = document.getElementById('catNameApi')
var catsLife = document.getElementById('catLifeApi')
var catsInfo = document.getElementById('catInfoApi')
var homeMode = document.getElementById('homeBtn')


function rndmDog(){

    var dogAPI = "3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854"
    var requestUrl = 'https://api.thedogapi.com/v1/breeds/search?q=golden&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854';
  
    fetch(requestUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data) //test

        var newDiv = document.createElement('div')
        newDiv.textContent = data[0].name
        dogsName.append(newDiv)

        var newDiv2 = document.createElement('div')
        newDiv2.textContent = data[0].life_span
        dogsLife.append(newDiv2)

        var newDiv3 = document.createElement('div')
        newDiv3.textContent = data[0].temperament
        dogsInfo.append(newDiv3)


        
        //grab image id and then fetch image
        function renderimage(data){
          var imgID = data[0].reference_image_id
         console.log(data) // test
          
          var requestUrl = 'https://api.thedogapi.com/v1/images/' + imgID;
          
          fetch(requestUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              imgURL = data.url
              console.log(data)//  has URL
              var image = document.createElement("img")
              image.setAttribute("src", imgURL)
              dogsImage.append(image)
            });
        }
        renderimage(data)
      });
  }


  function rndmCat(){
    var dogAPI = "3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854"
    var requestUrl = 'https://api.thecatapi.com/v1/breeds/search?q=bengal&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854';
  
    fetch(requestUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data) //test

        var newDiv = document.createElement('div')
        newDiv.textContent = data[0].name
        catsName.append(newDiv)

        var newDiv2 = document.createElement('div')
        newDiv2.textContent = data[0].life_span
        catsLife.append(newDiv2)

        var newDiv3 = document.createElement('div')
        newDiv3.textContent = data[0].temperament
        catsInfo.append(newDiv3)


        //grab image id and then fetch image
        function renderimage(data){
          var imgID = data[0].reference_image_id
         console.log(data) //test
          
          var requestUrl = 'https://api.thecatapi.com/v1/images/' + imgID;
          
          fetch(requestUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              imgURL = data.url
              console.log(data) // has URL
              var image = document.createElement("img")
              image.setAttribute("src", imgURL)
              catsImage.append(image)
            });
        }
        renderimage(data)
      });
  }


  rndmCat()
  rndmDog()

  homeMode.addEventListener('click', function() {
    window.location.href = "index.html"
})