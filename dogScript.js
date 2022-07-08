
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
      console.log(data)
      //creating div that will hold the image and secondary div that will hold the information
      var div = document.createElement('div')
      div.setAttribute("class", "row")
      //creating h3 element that holds the breeds name
      var breedName = document.createElement('h3')
      breedName.setAttribute("class", "col s12")
      //grabbing the name from the data object 
      breedName.textContent = data[0].name
      //appending 
      div.append(breedName)
      breedCard.append(div)
      
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
            console.log(data)
            //creating image element so i can then set its src attribute to the URL i just made
            var image = document.createElement("img")
            image.setAttribute("src", imgURL)
            image.setAttribute("class", "col s6")

            //create div that sits inside of Breed Card and holds all of the do
            var innerCard = document.createElement('div')
            innerCard.textContent = 'TESTTEST'
            innerCard.setAttribute("class", "col s6")
            div.append(innerCard)


            div.append(image)
          });
      }
      renderimage(data)
    });
}


breedCardForm.addEventListener('submit', renderCard)
