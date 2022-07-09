var cat = document.getElementById('catImage')
var dogMode = document.getElementById('catBtn')
var dropdownEl = document.getElementById('dropdown1')
var compBtn = document.getElementById('compareBtn')
var homeMode = document.getElementById('homeBtn')
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
]

var randomCatBreedLength = Math.floor(Math.random() * breedArr.length)
var breedId = []
var userSearch = 'beng'
$('.dropdown-trigger').dropdown();

var catUrl = 'https://api.thecatapi.com/v1/images/search?breed_ids='+ userSearch
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
    .then((data) => {
        for (var i = 0; i < data.length; i++) {
            breedId.push(data[i].id)
        }
    })
    console.log(breedId)
    
    
}

// function generateDropdown() {

//     for (var i = 0; i < breedArr.length; i++) {
//         //console.log(breedList[i].image.url)
//         var breedA = document.createElement('a')
//         var breedLi = document.createElement('li')
//         breedA.innerHTML = breedArr[i]
//         breedLi.append(breedA)
//         dropdownEl.append(breedLi)
//         // breedLi.addEventListener('click', function() {
//         //     userSearch = breedArr[i];
//         //     breedIdByName(userSearch)
//         // })
//     }
// }

function breedIdByName(breed) {
    var theId = ""
    console.log(breed)
    fetch(catBreed)
    .then((response) => response.json())
    .then((data) => {
        for (var i = 0; i < data.length; i++) {
            if (data[i].name === breed) {
                theId = data[i].id
            }
        }
        console.log(theId)
    })

    // for (var i = 0; i < breedArr.length; i++) {
    //     if (breed === )
    // }
}



catPicByBreed()
getCatBreed()
// generateDropdown()
breedIdByName("bengal")



dogMode.addEventListener('click', function() {
    window.location.href = "doghtml.html"
})

compBtn.addEventListener('click', function() {
    window.location.href = 'compare.html'
  })

homeMode.addEventListener('click', function() {
    window.location.href = "index.html"
})