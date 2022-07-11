var dogBtn = document.getElementById("dogBtn");
var mainEl = document.getElementById("id");

var catMode = document.getElementById("dogBtn");

var homeMode = document.getElementById("homeBtn");
var compBtn = document.getElementById("compareBtn");

var search = document.getElementById("search-input");
var breedCardForm = document.getElementById("breed-card-form");
var mainEl = document.getElementById("main");
var breedCard = document.getElementById("breed-card");

function renderCard(event) {
  event.preventDefault();
  //grabbing users input and trim white space
  var breed = search.value.trim();
  search.value = "";

  //building request url with endpoint and user input along with api key
  var requestUrl =
    "https://api.thedogapi.com/v1/breeds/search?q=" +
    breed +
    "&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854";

  //initial fetch request
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //clearing card each time it searches
      breedCard.innerHTML = "";
      console.log(data);
      if (data.length == 0) {
        var error = document.createElement("span");
        error.textContent = "error: breed not found!";
        breedCard.append(error);
      }
      console.log(data[0]);
      //setting the breed code to pass into function that will retrieve other info about dog
      var breedCode = data[0].id;
      //creating div that will hold the image and secondary div that will hold the information
      var div = document.createElement("div");
      //creating two divs, left is to hold the image, right is to hold the info
      var divLeft = document.createElement("div");
      var divRight = document.createElement("div");
      var cardTitle = document.createElement("h3");
      var infoCard = document.createElement("div");
      var cardContent = document.createElement("div");
      //creating elements for info
      var weightHeader = document.createElement("h3")
      var heightHeader = document.createElement("h3")
      var bredForHeader = document.createElement("h3")
      var breedGroupHeader = document.createElement("h3")
      var temperamentHeader = document.createElement("h3")

      var weight = document.createElement("p");
      var height = document.createElement("p");
      var bredFor = document.createElement("p");
      var breedGroup = document.createElement("p");
      var temperament = document.createElement("p");

      //style
      div.setAttribute("class", "row");
      divLeft.setAttribute("class", "left col s6");
      divRight.setAttribute("class", "row col s6");

      weightHeader.textContent = "Weight: "
      weightHeader.setAttribute("class", "col s12")

      heightHeader.textContent = "Height: "
      heightHeader.setAttribute("class", "col s12")
      
      bredForHeader.textContent = "Bred For: "
      bredForHeader.setAttribute("class", "col s12")

      breedGroupHeader.textContent = "Breed Group: "
      breedGroupHeader.setAttribute("class", "col s12")

      temperamentHeader.textContent = "Temperament: "
      temperamentHeader.setAttribute("class", "col s12")



      
    infoCard.setAttribute("class", "card horizontal col s12")
    cardContent.setAttribute("class", "card-content")
      
      cardTitle.textContent = data[0].name;
      weight.textContent = data[0].weight.imperial; + " lbs"
      height.textContent = data[0].height.imperial; + " inches"
      bredFor.textContent = data[0].bred_for;
      breedGroup.textContent = data[0].breed_group;
      temperament.textContent = data[0].temperament;


      
      
      weight.setAttribute("class", "col s12")
      bredFor.setAttribute("class", "col s12")
      breedGroup.setAttribute("class", "col s12")
      temperament.setAttribute("class", "col s12")
      //appending
      
      divRight.append(cardTitle)
      cardContent.append(weightHeader)
      cardContent.append(weight);
      cardContent.append(heightHeader)
      cardContent.append(height)
      cardContent.append(bredForHeader)
      cardContent.append(bredFor);
      cardContent.append(breedGroup)
      cardContent.append(breedGroup);
      cardContent.append(temperamentHeader)
      cardContent.append(temperament);


      infoCard.append(cardContent)
      divRight.append(infoCard)


      breedCard.append(div);
      breedCard.append(divLeft);
      breedCard.append(divRight);
      





      


      //grab image id and then fetch image
      function renderimage(data) {
        //with data passed in I am now grabbing the image ID and storing it in a variable and then building the new request url based off it
        var imgID = data[0].reference_image_id;
        var requestUrl = "https://api.thedogapi.com/v1/images/" + imgID;

        //fetch function that grabs image
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            //grabbing image url and storing it in variable
            imgURL = data.url;
            //creating image element so i can then set its src attribute to the URL i just made
            var image = document.createElement("img");
            image.setAttribute("src", imgURL);
            image.setAttribute("class", "materialboxed col s12");
            //create div that sits inside of Breed Card and holds all of the do
            var innerCard = document.createElement("div");
            innerCard.setAttribute("class", "col s6");

            divLeft.append(image);
            divRight.append(innerCard);
            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems);
          });
      }
      renderimage(data);

      //pass breed code into renderInfo function which builds search url off breed code and fethces the info
    });
}

function renderInfo(breedCode) {
  console.log(breedCode);
  function renderimage(data) {
    //with data passed in I am now grabbing the image ID and storing it in a variable and then building the new request url based off it
    var imgID = data[0].reference_image_id;
    var requestUrl = "https://api.thedogapi.com/v1/images/" + imgID;

    //fetch function that grabs image
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //grabbing image url and storing it in variable
        imgURL = data.url;
        //creating image element so i can then set its src attribute to the URL i just made
        var image = document.createElement("img");
        image.setAttribute("src", imgURL);
        image.setAttribute("class", "col s12");
        //create div that sits inside of Breed Card and holds all of the do
        var innerCard = document.createElement("div");
        innerCard.setAttribute("class", "col s6");

        divLeft.append(image);
        divRight.append(innerCard);
      });
  }
  renderimage(data);
}

catMode.addEventListener("click", function () {
  window.location.href = "../cat.html";
});

breedCardForm.addEventListener("submit", renderCard);

dogBtn.addEventListener("click", function () {
  window.location.href = "cat.html";
});

compBtn.addEventListener("click", function () {
  window.location.href = "compare.html";
});

homeMode.addEventListener("click", function () {
  window.location.href = "index.html";
});

// document.addEventListener('DOMContentLoaded', function() {
// var elems = document.querySelectorAll('.materialboxed');
//  var instances = M.Materialbox.init(elems);
//   instances.open();
// });
