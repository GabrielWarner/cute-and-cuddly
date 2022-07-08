var cat = document.getElementById('catImage')
var dogMode = document.getElementById('catBtn')

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    //var instances = M.Dropdown.init(elems, options);
});

var breed = "beng"
var catUrl = 'https://api.thecatapi.com/v1/images/search?breed_ids='+ breed

function catPicByBreed() {
    
    var catImg = document.createElement('img')
    fetch(catUrl)
    .then((response) => response.json())
    .then((data) => catImg.setAttribute('src', data[0].url))
    catImg.setAttribute('class', 'col l8')
    cat.append(catImg)
}

catPicByBreed()

dogMode.addEventListener('click', function() {
    window.location.href = "doghtml.html"
})