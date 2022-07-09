var catBtn = document.getElementById('catBtn')
var dogBtn = document.getElementById('dogBtn')
var mainEl = document.getElementById('main')
var button = document.getElementById('load')
var mainEl = document.getElementById('catBody')
var rand = Math.floor(Math.random() * 5);


var randomCatURL = "https://cat-fact.herokuapp.com/facts"

function fetchApi(url) {
    fetch(url)
        .then((respone) => respone.json())
        .then ((data) => {
            var fact = document.createElement('h2');
            console.log(data[rand].text);
            var text = data[rand].text;
            fact.textContent = text;
            mainEl.append(fact);
        })
}

fetchApi(randomCatURL);

catBtn.addEventListener('click', function() {
    window.location.href = 'cat.html'
})

dogBtn.addEventListener('click', function() {
    window.location.href = 'doghtml.html'
})

/*
.dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>


*/
