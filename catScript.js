var cat = document.getElementById('catImage')

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
});

var breed = "beng"
var catUrl = 'https://api.thecatapi.com/v1/breeds/search?q='+breed+'&api_key=f0f11a12-d477-4d44-ae91-5f773cb8183f';


