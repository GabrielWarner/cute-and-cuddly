
var dogsImage = document.getElementById("dogImage");
var dogsName = document.getElementById("dogNameApi");
var dogsLife = document.getElementById("dogLifeApi");
var dogsInfo = document.getElementById("dogInfoApi");
var catsImage = document.getElementById("catImage");
var catsName = document.getElementById("catNameApi");
var catsLife = document.getElementById("catLifeApi");
var catsInfo = document.getElementById("catInfoApi");
var homeMode = document.getElementById('homeBtn');
var playMode = document.getElementById('playBtn');
var breedArr = ['Abyssinian', 'Aegean', 'American Bobtail', 'American Curl', 'American Shorthair',
    'American Wirehair', 'Arabian Mau', 'Australian Mist', 'Balinese', 'Bambino', 'Bengal', 'Birman',
    'Bombay', 'British Longhair', 'British Shorthair', 'Burmese', 'Burmilla', 'California Spangled',
    'Chantilly-Tiffany', 'Chartreux', 'Chausie', 'Cheetoh', 'Colorpoint Shorthair', 'Cornish Rex',
    'Cymric', 'Cyprus', 'Devon Rex', 'Donskoy', 'Dragon Li', 'Egyptian Mau', 'European Burmese',
    'Exotic Shorthair', 'Havana Brown', 'Himalayan', 'Japanese Bobtail', 'Javanese', 'Khao Manee',
    'Korat', 'Kurilian', 'LaPerm', 'Maine Coon', 'Malayan', 'Manx', 'Munchkin', 'Nebelung',
    'Norwegian Forest Cat', 'Ocicat', 'Oriental', 'Persian', 'Pixie-bob', 'Ragamuffin', 'Ragdoll',
    'Russian Blue', 'Savannah', 'Scottish Fold', 'Selkirk Rex', 'Siamese', 'Siberian', 'Singapura',
    'Snowshoe', 'Somali', 'Sphynx', 'Tonkinese', 'Toyger', 'Turkish Angora', 'Turkish Van', 'York Chocolate'
];
var dogArrWorking = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","28","29","30","31","32","33","34","36","38","41","42","43","45","47","48","51","52","53","54","55","56","57","58","59","61","67","68","69","70","71","76","78","79","80","81","201"]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive

}

function rndmDog(){ 
  var rndmsomthng = getRandomInt(0, 61)
  var requestUrl =
    "https://api.thedogapi.com/v1/images/search?breeds_id="+rndmsomthng+"&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854";

    
  fetch(requestUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log("dog",data); // test

      var newDiv = document.createElement("div");
      newDiv.textContent = data[0].breeds[0].name;
      dogsName.append(newDiv);

      var newDiv2 = document.createElement("div");
      newDiv2.textContent = data[0].breeds[0].life_span;
      dogsLife.append(newDiv2);

      var newDiv3 = document.createElement("div");
      newDiv3.textContent = data[0].breeds[0].temperament;
      dogsInfo.append(newDiv3);

      dogsImage.setAttribute("src", data[0].url)

      //if breeds.length = 0 then these values display sometthing "not found"
      // else proceed 
      //grab image id and then fetch image
      // if image not found display alternate or error message of some sort

    });
}

function rndmCat() {
  var rndmsomthng = getRandomInt(1, 67)
  var requestUrl =
    "https://api.thecatapi.com/v1/images/search?image_id="+breedArr[rndmsomthng]+"&api_key=f0f11a12-d477-4d44-ae91-5f773cb8183f";
  var requestURL2=
  "https://api.thecatapi.com/v1/breeds/search?q="+breedArr[rndmsomthng]+"&api_key=f0f11a12-d477-4d44-ae91-5f773cb8183f";

  fetch(requestUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data); //test
      catsImage.setAttribute("src", data[0].url)
      fetch(requestURL2)
      .then(function (res)
      {
        return res.json();
      })
      .then(function (data){
        console.log(data);
        var newDiv = document.createElement("div");
        newDiv.textContent = data[0].name;
        catsName.append(newDiv);
  
        var newDiv2 = document.createElement("div");
        newDiv2.textContent = data[0].life_span;
        catsLife.append(newDiv2);
  
        var newDiv3 = document.createElement("div");
        newDiv3.textContent = data[0].temperament;
        catsInfo.append(newDiv3);
  
        // catsImage.setAttribute("src", data[0].url)
        //grab image id and then fetch image 
      })

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
}

rndmCat();
rndmDog();

function storeVar(value){
  var buttonEl = document.getElementById("picCompare");
  console.log(buttonEl);
  var cutePet = document.getElementById("cutestPet");
  cutePet.innerHTML = value;
  let amount = value;
  console.log(amount)

  buttonEl.classList.add("stopCursor")}



  homeMode.addEventListener('click', function() {
    window.location.href = "index.html"
})

playMode.addEventListener('click', function() {
  window.location.href = "compare.html"
})

