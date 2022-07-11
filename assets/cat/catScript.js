var cat = document.getElementById('catImage')
var catFact = document.getElementById('catFact')
var dogMode = document.getElementById('catBtn')
var dropdownEl = document.getElementById('dropdown1')
var compBtn = document.getElementById('compareBtn')
var homeMode = document.getElementById('homeBtn')
var inputEl = document.getElementById('breed-card-form')
var searchInput = document.getElementById('search-input')
var modalList = document.getElementById('modalList')

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

var randBreed = Math.floor(Math.random() * breedArr.length)
console.log(randBreed)
var breedId = []
var userSearch = 'beng'

for (var i = 0; i < breedArr.length; i++) {
    var breedLi = document.createElement('li')
    breedLi.innerHTML = breedArr[i]
    modalList.append(breedLi)
}

function getBreedId() {
    fetch(catBreed)
        .then((response) => response.json())
        .then((data) => {
            for (var i = 0; i < breedArr.length; i++) {
            var newId = data[i].id
            breedId.push(newId)
        }
        console.log(breedId)
    })
    
    
}

function loadRand() {
    searchInput.value = breedArr[randBreed]
}

var catUrl = 'https://api.thecatapi.com/v1/images/search?breed_ids='
var catBreed = 'https://api.thecatapi.com/v1/breeds'
var apiKey = '&api_key=f0f11a12-d477-4d44-ae91-5f773cb8183f'


function makeCatImage(event) {
    event.preventDefault()
    console.log('hi')
    cat.innerHTML = ""
    var breed = searchInput.value.trim().toLowerCase()
    searchInput.value = ""
    var id = ""
    console.log(breed)
    for (var i = 0; i < breedArr.length; i++) {
        if (breedArr[i].toLowerCase() === breed) {
            id = breedId[i]
            breed = breedArr[i]
            searchInput.setAttribute('placeholder', "Type breed")
        }
    }
    console.log(id)
    
    if (id === "") {
    searchInput.setAttribute('placeholder', "Not a breed: click button for list -->")
    catFact.innerHTML = ""
    return
    }
    
    fetch(catUrl+id)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        var catPic = document.createElement('img')
        catPic.setAttribute('src', data[0].url)
        catPic.setAttribute('class', 'col s8 m8 materialboxed')
        cat.append(catPic)
        var elems = document.querySelectorAll('.materialboxed');
        var instances = M.Materialbox.init(elems);
    })
    console.log(breed)
    makeCatDataCard(breed)
}

function makeCatDataCard(breed) {
    catFact.innerHTML = ""
    fetch(catBreed)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        for (var i = 0; i < data.length; i++) {
            if (data[i].name === breed) {

                var divContainer = document.createElement('div')
                var cardHeader = document.createElement('h2')
                var divCardType = document.createElement('div')
                var divStacked = document.createElement('div')
                var divContent = document.createElement('div')
                var descHead = document.createElement('h3')
                var descText = document.createElement('p')
                var temperament = document.createElement('h3')
                var tempText = document.createElement('p')
                var org = document.createElement('h3')
                var orgText = document.createElement('p')
                var weight = document.createElement('h3')
                var weightText = document.createElement('p')

                divContainer.setAttribute('class', "col s12 m12 l12")
                cardHeader.setAttribute('class', 'header')
                divCardType.setAttribute('class', 'card horizontal')
                divStacked.setAttribute('class', 'card-stacked')
                divContent.setAttribute('class', 'card-content left-align')

                cardHeader.innerHTML = data[i].name
                descHead.innerHTML = "Description:"
                descText.innerHTML = data[i].description
                temperament.innerHTML = "Temperament:"
                tempText.innerHTML = data[i].temperament
                org.innerHTML = "Origin:"
                orgText.innerHTML = data[i].origin
                weight.innerHTML = "Weight:"
                weightText.innerHTML = data[i].weight.imperial + " pounds"


                divContent.append(descHead)
                divContent.append(descText)
                divContent.append(temperament)
                divContent.append(tempText)
                divContent.append(org)
                divContent.append(orgText)
                divContent.append(weight)
                divContent.append(weightText)
                divStacked.append(divContent)
                divCardType.append(divStacked)
                divContainer.append(cardHeader)
                divContainer.append(divCardType)
                catFact.append(divContainer)

            }
        }
    })
}

getBreedId()
loadRand()

$(document).ready(function(){
    $('.modal').modal();
});

dogMode.addEventListener('click', function() {
    window.location.href = "doghtml.html"
})

compBtn.addEventListener('click', function() {
    window.location.href = 'compare.html'
})

homeMode.addEventListener('click', function() {
    window.location.href = "index.html"
})

inputEl.addEventListener('submit', makeCatImage)

// THIS WAS ALL ORIGINAL TESTING THAT WE USED TO LEARN ABOUT API
// $('.dropdown-trigger').dropdown();
// function catPicByBreed() {
    
    //     var catImg = document.createElement('img')
    //     fetch(catUrl)
    //     .then((response) => response.json())
    //     .then((data) => catImg.setAttribute('src', data[0].url))
    //     catImg.setAttribute('class', 'col l8')
    //     cat.append(catImg)
    // }
    
    // function getCatBreed() {
        
        //     //var catImg = document.createElement('img')
        //     fetch(catBreed)
        //     .then((response) => response.json())
        //     .then((data) => {
//             console.log(data)
//         // for (var i = 0; i < data.length; i++) {
//         //     breedId.push(data[i].id)
//         // }
//     })
//     console.log(breedId)


// }

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

// function breedIdByName(breed) {
//     var theId = ""
//     console.log(breed)
//     fetch(catBreed)
//     .then((response) => response.json())
//     .then((data) => {
//         for (var i = 0; i < data.length; i++) {
//             if (data[i].name === breed) {
//                 theId = data[i].id
//             }
//         }
//         console.log(theId)
//     })

//     // for (var i = 0; i < breedArr.length; i++) {
//     //     if (breed === )
//     // }





// catPicByBreed()
// getCatBreed()
// // generateDropdown()
// breedIdByName("bengal")



// dogMode.addEventListener('click', function() {
//     window.location.href = "doghtml.html"
// })

// compBtn.addEventListener('click', function() {
//     window.location.href = 'compare.html'
//   })




// catPicByBreed()
// getCatBreed()
// // generateDropdown()
// breedIdByName("bengal")



// dogMode.addEventListener('click', function() {
//     window.location.href = "doghtml.html"
// })

// compBtn.addEventListener('click', function() {
//     window.location.href = 'compare.html'
//   })

