const pleasePick = 'Please click on the Pet you think is the cutest';
const youChoseCat = `You picked the <span class="chosenPet">cat</span> to be cutest`;
const youChoseDog = `You picked the <span class="chosenPet">dog</span> to be the cutest`;

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
      dog: 0,
      cat: 0,
    };

function getRandomInt(min, max) {                                                                                                             //randomizer function for arrays
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

function initializeVariables() {                                                                                                              //setting all the variables
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
  const tgleBtn = document.getElementById('tggleBttn').classList;                                                                             //turning off the cursor
  if ((existingGame.dog > 0 || existingGame.cat > 0) && tgleBtn.contains('stopCursor')) {
    tgleBtn.remove('stopCursor');
  }
}
function setTitleText(titleVal) {                                                                                                             //setting the subtext value based on choice or base value
  document.getElementById('cutestPet').innerHTML = titleVal;
}
async function callAnimalData() {
  await this.rndmCat().then(() => {
    this.rndmDog().then(() => {
      this.addRemoveStop([document.getElementById("picCompare"), document.getElementById('btnCont')], false);
    });
  });
}

async function rndmDog() {                                                                                                                   //connecting to dog api and importing data
  var rndmsomthng = getRandomInt(0, 250);
  var requestUrl =
    "https://api.thedogapi.com/v1/images/search?breeds_id=" +
    rndmsomthng +
    "&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854";
  try {
    fetch(requestUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // console.log("dog", data); // test

        if (data[0].breeds.length > 0) {                                                                                                    //as long as there is data
          var newDiv = document.createElement("div");                                                                                       // create div for dog name and add
          newDiv.textContent = data[0].breeds[0].name;
          dogsName.append(newDiv);

          var newDiv2 = document.createElement("div");                                                                                      // create div for dog life span and add
          newDiv2.textContent = data[0].breeds[0].life_span + " years on average";
          dogsLife.append(newDiv2);

          var newDiv3 = document.createElement("div");                                                                                      // create div for dog temperament and add
          newDiv3.textContent = data[0].breeds[0].temperament;
          dogsInfo.append(newDiv3);

          dogsImage.setAttribute("src", data[0].url);                                                                                       // seting the dog image to the url in array
        } else {
          dogsImage.setAttribute(
            "src",
            "http://cdn.akc.org/content/article-body-image/lab_puppy_dog_pictures.jpg"
          );

          var newDiv = document.createElement("div");                                                                                       // creating default dog data if data is not available
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
        const nDate = new Date();
        console.log(nDate);
        console.log('-----');
        console.log('-----');
        return 1;
      });
  } catch (err) {
    console.log('MAJOR error fetching api date');
    rndmDog();
  }
}

async function rndmCat() {                                                                                                                    //connecting to cat api and importing data       
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
        catsImage.setAttribute("src", data[0].url);                                                                                           //set the cat image from array
        fetch(requestURL2)
          .then(function (res) {
            return res.json();
          })
          .then(function (data) {
            // console.log(data);
            var newDiv = document.createElement("div");                                                                                       //set cat name and add
            newDiv.textContent = data[0].name;
            catsName.append(newDiv);

            var newDiv2 = document.createElement("div");                                                                                     //new div for attributes


            var years = " years on average";
            newDiv2.textContent = data[0].life_span + years;                                                                                 //set cat life span and add

            catsLife.append(newDiv2);

            var newDiv3 = document.createElement("div");                                                                                     //set cat temperament and add
            newDiv3.textContent = data[0].temperament;
            catsInfo.append(newDiv3);
          });
          const nDate = new Date();
          console.log(nDate);
          console.log('-----');
          console.log('-----');
          return 1;
      });
  } catch (err) {
    console.log('major failur fetching data');
    setTimeout(() => {
      this.rndmCat();
    }, 1000)
  }
}


function storeVar(value) {                                                                                                                  //storing value for cat or dog for score sheet
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
  this.addRemoveStop([document.getElementById("picCompare"), document.getElementById('btnCont')], true);
  setTimeout(() => {
    this.replay();
  }, 2000);
}

function addRemoveStop(elmnts, stop) {                                                                                                    //adding and removing the stop cursor function over images
  elmnts.forEach((elmnt) => {
    if (stop) {
      elmnt.classList.add("stopCursor");
    } else {
      elmnt.classList.remove("stopCursor");
    }  
  });
}

function toggleScoreSheet() {                                                                                                            //allowing for modal to be able to display and be hidden
  const isShowingScoreSheet = document.getElementById('scoreOverlay').classList;

  if (isShowingScoreSheet.contains('noDisplay')) {
    loadScoreSheet();
    isShowingScoreSheet.remove('noDisplay');
  } else {
    isShowingScoreSheet.add('noDisplay');
  }
}

function loadScoreSheet() {                                                                                                              //only allows for scoresheet to be shown if there is data
  let favAnimal = null;
  let notFavAnimal = null;
  let isEqual = existingGame.dog === existingGame.cat;
  if (existingGame.dog > existingGame.cat) {
    favAnimal = {
      type: 'dog',
      times: existingGame.dog
    };
    notFavAnimal = {
      type: 'cat',
      times: existingGame.cat
    }
  } else if (existingGame.dog < existingGame.cat) {
    notFavAnimal = {
      type: 'dog',
      times: existingGame.dog
    };
    favAnimal = {
      type: 'cat',
      times: existingGame.cat
    }
  }


  let scoreHTML = !isEqual ?
    `
      <h1>
        Hooray! You've selected ${favAnimal.type}'s the most! Selected ${favAnimal.times} times!
      </h1>
      <br/>
      <br/>
      <h3>
        Ut Oh! You don't seem to like ${notFavAnimal.type}'s! Selected ${notFavAnimal.times} times!
      </h3>
  ` :
    `
    <h1>
      Wow! You like both the Cat's and the Dog's the Same! That's so weird!
    </h1>
  `;

  document.getElementById("scoreText").innerHTML = scoreHTML;
}


function navigateAway(urlToNavigate) {                                                                                                    //function to redirect to any web page
  this.clearData();
  window.location.href = urlToNavigate;
}

function clearScoreSheet() {                                                                                                              //warning to make sure user wants to clear data
  if (confirm("This will clear your existing values! Are you Sure?") === true) {
    this.clearData();
    this.replay();
  }
}
function clearData() {                                                                                                                    //clears all saved data in scoresheet
  existingGame.dog = 0;
  existingGame.cat = 0;
  localStorage.setItem('petPicked', JSON.stringify(existingGame));
}

function replay() {                                                                                                                       //reload the game on button click
  window.location.reload();
};