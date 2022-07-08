var catBtn = document.getElementById('catBtn')

var mainEl = document.getElementById('main')
var button = document.getElementById('load')
var mainEl = document.getElementById('catBody')
var rand = Math.floor(Math.random() * 5);


var randomCatURL = "https://cat-fact.herokuapp.com/facts"

function fetchApi(url) {
    fetch(url)
        .then((respone) => respone.json())
        .then ((data) => {
            var fact = document.createElement('h2');
            console.log(data[rand].text);
            var text = data[rand].text;
            fact.textContent = text;
            mainEl.append(fact);
        })
}

fetchApi(randomCatURL);

catBtn.addEventListener('click', function() {
    window.location.href = 'cat.html'
})



button.addEventListener('click', renderCard)

function renderCard(){

  var dogAPI = "3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854"
  var requestUrl = 'https://api.thedogapi.com/v1/breeds/search?q=golden&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var div = document.createElement('div')
      div.textContent = data[0].name
      mainEl.append(div)
      
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
            mainEl.append(image)
          });
      }
      renderimage(data)
    });
}

