
var dogBtn = document.getElementById('dogBtn')
var mainEl = document.getElementById('id')

var catMode = document.getElementById('dogBtn')

var homeMode = document.getElementById('homeBtn')
var compBtn = document.getElementById('compareBtn')

var search = document.getElementById('search-input')
var breedCardForm = document.getElementById('breed-card-form')
var mainEl = document.getElementById('main')
var breedCard = document.getElementById('breed-card')



function renderCard(event){
  event.preventDefault()
  //grabbing users input and trim white space
  var breed = search.value.trim();

  //building request url with endpoint and user input along with api key
  var requestUrl = 'https://api.thedogapi.com/v1/breeds/search?q=' + breed + '&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854';

  //initial fetch request
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //clearing card each time it searches
      breedCard.innerHTML = ""
      console.log(data[0])
      //setting the breed code to pass into function that will retrieve other info about dog
      var breedCode = data[0].id
      //creating div that will hold the image and secondary div that will hold the information
      var div = document.createElement('div')
      //creating to divs
      var divLeft = document.createElement('div')
      divLeft.setAttribute("class", "left col s6")
      var divRight = document.createElement('div')
      divRight.setAttribute("class", "right col s6")
      div.setAttribute("class", "row")
      //creating h3 element that holds the breeds name
      var breedName = document.createElement('h3')
      breedName.setAttribute("class", "col s12")
      //grabbing the name from the data object 
      breedName.textContent = data[0].name
      //appending 
      div.append(breedName)
      breedCard.append(div)
      breedCard.append(divLeft)
      breedCard.append(divRight)
      
      //grab image id and then fetch image
      function renderimage(data){
        //with data passed in I am now grabbing the image ID and storing it in a variable and then building the new request url based off it
        var imgID = data[0].reference_image_id
        var requestUrl = 'https://api.thedogapi.com/v1/images/' + imgID;
        
        //fetch function that grabs image
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            //grabbing image url and storing it in variable
            imgURL = data.url
            //creating image element so i can then set its src attribute to the URL i just made
            var image = document.createElement("img")
            image.setAttribute("src", imgURL)
            image.setAttribute("class", "col s12")
            //create div that sits inside of Breed Card and holds all of the do
            var innerCard = document.createElement('div')
            innerCard.textContent = 'TESTTEST'
            innerCard.setAttribute("class", "col s6")
            
            divLeft.append(image)
            divRight.append(innerCard)
          });
      }
      renderimage(data)

      //pass breed code into renderInfo function which builds search url off breed code and fethces the info
      renderInfo(breedCode)
      
    });
}

function renderInfo(breedCode){
  console.log(breedCode)
  //use breed code to create URL
  var secondUrl = "https://api.ThecatAPI.com/v1/images/search?breed_ids=beng&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854"

  function getApi(secondUrl) {
    fetch(secondUrl)
      .then(function (response) {
        return response.json();
    })
    .then(function(data){
      console.log(data)
    });
  }
  getApi(secondUrl)

}



catMode.addEventListener('click', function() {
  window.location.href = "cat.html"
})

breedCardForm.addEventListener('submit', renderCard)

dogBtn.addEventListener('click', function() {
  window.location.href = "cat.html"
})

compBtn.addEventListener('click', function() {
  window.location.href = 'compare.html'
})

homeMode.addEventListener('click', function() {
  window.location.href = "index.html"
})