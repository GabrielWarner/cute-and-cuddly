
var search = document.getElementById('search-input')
var breedCardForm = document.getElementById('breed-card-form')
var mainEl = document.getElementById('main')
var breedCard = document.getElementById('breed-card')



function renderCard(event){
  event.preventDefault()
  var breed = search.value
  var requestUrl = 'https://api.thedogapi.com/v1/breeds/search?q=' + breed + '&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      breedCard.innerHTML = ""
      console.log(data)
      var div = document.createElement('div')
      div.setAttribute("class", "row")
      var breedName = document.createElement('h3')
      breedName.setAttribute("class", "col s12")
      breedName.textContent = data[0].name
      div.append(breedName)
      breedCard.append(div)
      
      //grab image id and then fetch image
      function renderimage(data){
        var imgID = data[0].reference_image_id
      
        
        var requestUrl = 'https://api.thedogapi.com/v1/images/' + imgID;
        
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            //create image
            imgURL = data.url
            console.log(data)
            var image = document.createElement("img")
            image.setAttribute("src", imgURL)
            image.setAttribute("class", "col s6")

            //create div that sits inside of Breed Card and holds the dogs info
            var innerCard = document.createElement('div')
            innerCard.textContent = 'TESTTEST'
            innerCard.setAttribute("class", "col s6 offset-s6")
            div.append(innerCard)


            div.append(image)
          });
      }
      renderimage(data)
    });
}


breedCardForm.addEventListener('submit', renderCard)
