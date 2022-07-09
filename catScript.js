var cat = document.getElementById('catImage')
var dogMode = document.getElementById('catBtn')
var dropdownEl = document.getElementById('dropdown1')
var compBtn = document.getElementById('compareBtn')

var breedArr = ['Abyssinian', 'Aegean', 'American Bobtail', 'American Curl', 'American Shorthair',
    
]
$('.dropdown-trigger').dropdown();

var breed = "beng"
var catUrl = 'https://api.thecatapi.com/v1/images/search?breed_ids='+ breed
var catBreed = 'https://api.thecatapi.com/v1/breeds'

function catPicByBreed() {
    
    var catImg = document.createElement('img')
    fetch(catUrl)
    .then((response) => response.json())
    .then((data) => catImg.setAttribute('src', data[0].url))
    catImg.setAttribute('class', 'col l8')
    cat.append(catImg)
}

function getCatBreed() {
    
    //var catImg = document.createElement('img')
    fetch(catBreed)
    .then((response) => response.json())
    .then((data) => console.log(data))
    
    
}

function generateDropdown() {
    for (var i = 0; i < breedArr.length; i++) {
        //console.log(breedList[i].image.url)
        var breedA = document.createElement('a')
        var breedLi = document.createElement('li')
        breedA.innerHTML = breedArr[i]
        breedLi.append(breedA)
        dropdownEl.append(breedLi)
    }
}

catPicByBreed()
getCatBreed()
generateDropdown()



dogMode.addEventListener('click', function() {
    window.location.href = "doghtml.html"
})

compBtn.addEventListener('click', function() {
    window.location.href = 'compare.html'
  })