var catBtn = document.getElementById('catBtn')
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
