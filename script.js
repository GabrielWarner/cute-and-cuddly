var catBtn = document.getElementById('catBtn')
var mainEl = document.getElementById('catBody')

var randomCatURL = "https://cat-fact.herokuapp.com/facts"

function fetchApi(url) {
    fetch(url)
        .then((respone) => respone.json())
        .then ((data) => {
            var fact = document.createElement('h2');
            console.log(data[0].text);
            var text = data[0].text;
            fact.textContent = text;
            mainEl.append(fact);
        })
}

fetchApi(randomCatURL);

catBtn.addEventListener('click', function() {
    window.location.href = 'cat.html'
})
