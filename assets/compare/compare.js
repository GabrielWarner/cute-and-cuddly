const pleasePick = 'Please click on the Pet you think is the cutest';
const youChoseCat = 'You picked the cat to be cutest';
const youChoseDog = 'You picked the dog to be the cutest';

var dogsImage = null;
var dogsName = null;
var dogsLife = null;
var dogsInfo = null;
var catsImage = null;
var catsName = null;
var catsLife = null;
var catsInfo = null;
var breedArr = [];
let existingGame =
  localStorage.getItem('petPicked') ?
  JSON.parse(localStorage.getItem(`petPicked`)) :
  {
    youPickedTitle: pleasePick,
    dog: 0,
    cat: 0,
  };

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
  
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function init() {
  this.initializeVariables();  
  this.setTitleText(pleasePick);
  this.callAnimalData();
  console.log(existingGame);
}

function initializeVariables() {
  dogsImage = document.getElementById("dogImage");
  dogsName = document.getElementById("dogNameApi");
  dogsLife = document.getElementById("dogLifeApi");
  dogsInfo = document.getElementById("dogInfoApi");
  catsImage = document.getElementById("catImage");
  catsName = document.getElementById("catNameApi");
  catsLife = document.getElementById("catLifeApi");
  catsInfo = document.getElementById("catInfoApi");
  breedArr = [
    "Abyssinian",
    "Aegean",
    "American Bobtail",
    "American Curl",
    "American Shorthair",
    "American Wirehair",
    "Arabian Mau",
    "Australian Mist",
    "Balinese",
    "Bambino",
    "Bengal",
    "Birman",
    "Bombay",
    "British Longhair",
    "British Shorthair",
    "Burmese",
    "Burmilla",
    "California Spangled",
    "Chantilly-Tiffany",
    "Chartreux",
    "Chausie",
    "Cheetoh",
    "Colorpoint Shorthair",
    "Cornish Rex",
    "Cymric",
    "Cyprus",
    "Devon Rex",
    "Donskoy",
    "Dragon Li",
    "Egyptian Mau",
    "European Burmese",
    "Exotic Shorthair",
    "Havana Brown",
    "Himalayan",
    "Japanese Bobtail",
    "Javanese",
    "Khao Manee",
    "Korat",
    "Kurilian",
    "LaPerm",
    "Maine Coon",
    "Malayan",
    "Manx",
    "Munchkin",
    "Nebelung",
    "Norwegian Forest Cat",
    "Ocicat",
    "Oriental",
    "Persian",
    "Pixie-bob",
    "Ragamuffin",
    "Ragdoll",
    "Russian Blue",
    "Savannah",
    "Scottish Fold",
    "Selkirk Rex",
    "Siamese",
    "Siberian",
    "Singapura",
    "Snowshoe",
    "Somali",
    "Sphynx",
    "Tonkinese",
    "Toyger",
    "Turkish Angora",
    "Turkish Van",
    "York Chocolate",
  ];
}
function setTitleText(titleVal) {
  document.getElementById('cutestPet').innerText = titleVal;
}
function callAnimalData() {
  this.rndmCat();
  this.rndmDog();
}

function rndmDog() {
  var rndmsomthng = getRandomInt(0, 250);
  var requestUrl =
    "https://api.thedogapi.com/v1/images/search?breeds_id=" +
    rndmsomthng +
    "&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854";

  fetch(requestUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // console.log("dog", data); // test

      if (data[0].breeds.length > 0) {
        var newDiv = document.createElement("div");
        newDiv.textContent = data[0].breeds[0].name;
        dogsName.append(newDiv);

        var newDiv2 = document.createElement("div");
        newDiv2.textContent = data[0].breeds[0].life_span + " years on average";
        dogsLife.append(newDiv2);

        var newDiv3 = document.createElement("div");
        newDiv3.textContent = data[0].breeds[0].temperament;
        dogsInfo.append(newDiv3);

        dogsImage.setAttribute("src", data[0].url);
      } else {
        dogsImage.setAttribute(
          "src",
          "http://cdn.akc.org/content/article-body-image/lab_puppy_dog_pictures.jpg"
        );

        var newDiv = document.createElement("div");
        newDiv.textContent = "Black Lab Puppy";
        dogsName.append(newDiv);

        var newDiv2 = document.createElement("div");
        newDiv2.textContent = " 10-12 years on average";
        dogsLife.append(newDiv2);

        var newDiv3 = document.createElement("div");
        newDiv3.textContent =
          " All black Labs are typically active, friendly and loyal. They bond strongly with their family, but usually love meeting new people too";
        dogsInfo.append(newDiv3);
      }

      //if breeds.length = 0 then these values display sometthing "not found"
      // else proceed
      //grab image id and then fetch image
      // if image not found display alternate or error message of some sort
    });
}

function rndmCat() {
  var rndmsomthng = getRandomInt(1, 67);
  var requestUrl =
    "https://api.thecatapi.com/v1/images/search?image_id=" +
    breedArr[rndmsomthng] +
    "&api_key=f0f11a12-d477-4d44-ae91-5f773cb8183f";
  var requestURL2 =
    "https://api.thecatapi.com/v1/breeds/search?q=" +
    breedArr[rndmsomthng] +
    "&api_key=f0f11a12-d477-4d44-ae91-5f773cb8183f";

  try {
    fetch(requestUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      // console.log(data); //test
      catsImage.setAttribute("src", data[0].url);
      fetch(requestURL2)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          // console.log(data);
          var newDiv = document.createElement("div");
          newDiv.textContent = data[0].name;
          catsName.append(newDiv);

          var newDiv2 = document.createElement("div");


          var years = " years on average";
          newDiv2.textContent = data[0].life_span + years;

          catsLife.append(newDiv2);

          var newDiv3 = document.createElement("div");
          newDiv3.textContent = data[0].temperament;
          catsInfo.append(newDiv3);

          // catsImage.setAttribute("src", data[0].url)
          //grab image id and then fetch image
        });

      // var newDiv = document.createElement("div");
      // newDiv.textContent = data[0].name;
      // catsName.append(newDiv);

      // var newDiv2 = document.createElement("div");
      // newDiv2.textContent = data[0].life_span;
      // catsLife.append(newDiv2);

      // var newDiv3 = document.createElement("div");
      // newDiv3.textContent = data[0].temperament;
      // catsInfo.append(newDiv3);

      // catsImage.setAttribute("src", data[0].url)
      // //grab image id and then fetch image
    });
  } catch(err) {
    console.log('major failur fetching data');
    setTimeout(() => {
      this.rndmCat();
    }, 1000)
  }
}


function storeVar(value) {
  let selTitle = '';
  if (value === 0) {
    existingGame.cat += 1;
    selTitle = youChoseCat;
  } else {
    existingGame.dog += 1;
    selTitle = youChoseDog;
  }
  localStorage.setItem('petPicked', JSON.stringify(existingGame));


  this.setTitleText(selTitle);  
  this.addRemoveStop(document.getElementById("picCompare"), true);
  setTimeout(() => {
    this.replay();
  }, 5000);
}

function addRemoveStop(elmnt, stop) {
  if (stop) {
    elmnt.classList.add("stopCursor");
  } else {
    elmnt.classList.remove("stopCursor");
  }
}



function goHome() {
  window.location.href = "index.html";
};

function replay() {
  window.location.reload();
};
