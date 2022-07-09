var dogBtn = document.getElementById('dogBtn')
var mainEl = document.getElementById('id')

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

button.addEventListener('click', renderCard)
dogBtn.addEventListener('click', function() {
    window.location.href = "cat.html"
})