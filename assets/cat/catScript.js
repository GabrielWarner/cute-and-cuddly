//setting a bunch of variables to elements from our html
//setting variables to urls of our apis
//setting a variable to a random number between 0 and our breed array length - 1
var cat = document.getElementById('catImage')
var catFact = document.getElementById('catFact')
var dogMode = document.getElementById('catBtn')
var dropdownEl = document.getElementById('dropdown1')
var compBtn = document.getElementById('compareBtn')
var homeMode = document.getElementById('homeBtn')
var inputEl = document.getElementById('breed-card-form')
var searchInput = document.getElementById('search-input')
var modalList = document.getElementById('modalList')
var outColor = document.getElementById('outsideColor')
var catUrl = 'https://api.thecatapi.com/v1/images/search?breed_ids='
var catBreed = 'https://api.thecatapi.com/v1/breeds'
var apiKey = '&api_key=f0f11a12-d477-4d44-ae91-5f773cb8183f'
var randBreed = Math.floor(Math.random() * breedArr.length)
var breedId = []
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

//loops through our breed array to generate list inside the modal
for (var i = 0; i < breedArr.length; i++) {
    var breedLi = document.createElement('li')
    breedLi.innerHTML = breedArr[i]
    modalList.append(breedLi)
}

//runs a fetch from our breed list api to generate a matched list of breed ids alongside our breed names
//called on page load
function getBreedId() {
    fetch(catBreed)
        .then((response) => response.json())
        .then((data) => {
            for (var i = 0; i < breedArr.length; i++) {
            var newId = data[i].id
            breedId.push(newId)
        }
    })
    
    
}

//loads a random cat breed into the input field
//called on page load
function loadRand() {
    searchInput.value = breedArr[randBreed]
}

//called on user submit in the input form
//clears any image displayed on page
//sets variable to the trimmed, lowercase value of what the user inputted when submit was hit
//create new vadiable id
//for every item in the breed array, compare the breed at that index to the breed the user entered
//if we find a match, set the variable id to the item from breedId array at that index point
//same for the breed and resets placeholder text to 'type breed'
//if we dont find a match, display our error message as placeholder, clear anything in our data bio and end function
function makeCatImage(event) {
    event.preventDefault()
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
    
    if (id === "") {
    searchInput.setAttribute('placeholder', "Not a breed: click button for list -->")
    catFact.innerHTML = ""
    return
    }

//adds the breed id to our api url that requires a breed id to search for images of that breed
//dynamically creates image element using fetched url
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

//call next function, passing in our breed, to generate the bio card
    makeCatDataCard(breed)
}


//function that generates the bio card
//run a fetch to generate our list of cat breeds and data about each cat
//takes in the breed generated from makeCatImage() and passes it into a conditional statement within a for loop.
//if the breed from makeCatImage() matches any breed in our generated data array from the fetch, we dynamically create
//a bunch of elements that make up the data card and styles them with other data from the breed at the index point that satisfied our if statement
//at the end of the function it sets the background of our whole static container to green
//called inside makeCatImage()
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
                divCardType.setAttribute('id', 'card')
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
                
                outColor.setAttribute('class', 'green lighten-3 container')
            }
        }
    })
}

// functions that run on page load to generate out breed id list and load a random 
getBreedId()
loadRand()

//jquery that triggers modal
$(document).ready(function(){
    $('.modal').modal();
});

// event listener that takes us to dog page on button click
dogMode.addEventListener('click', function() {
    window.location.href = "doghtml.html"
})

// event listener that takes us to cat page on button click
compBtn.addEventListener('click', function() {
    window.location.href = 'compare.html'
})

// event listener that takes us to home page on button click
homeMode.addEventListener('click', function() {
    window.location.href = "index.html"
})


inputEl.addEventListener('submit', makeCatImage)





// THIS WAS ALL ORIGINAL TESTING THAT WE USED TO LEARN ABOUT API AND TRY TO GENERATE A DROPDOWN
// var userSearch = 'beng'
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

