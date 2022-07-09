var catBtn = document.getElementById('catBtn')
var dogBtn = document.getElementById('dogBtn')
var mainEl = document.getElementById('main')
var button = document.getElementById('load')
var compBtn = document.getElementById('compareBtn')




catBtn.addEventListener('click', function() {
    window.location.href = 'cat.html'
})

dogBtn.addEventListener('click', function() {
    window.location.href = 'doghtml.html'
})

compBtn.addEventListener('click', function() {
  window.location.href = 'compare.html'
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

button.addEventListener('click', renderCard)



  var dogAPI = "3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854"
  var requestUrl = 'https://api.thedogapi.com/v1/breeds/search?q=golden&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var div = document.createElement('div')
      div.textContent = data[0].name
      mainEl.append(div)
      
      //grab image id and then fetch image
      function renderimage(data){
        var imgID = data[0].reference_image_id
        console.log(imgID)
        
        var requestUrl = 'https://api.thedogapi.com/v1/images/' + imgID;
        
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            imgURL = data.url
            console.log(data)
            var image = document.createElement("img")
            image.setAttribute("src", imgURL)
            mainEl.append(image)
          });
      }
      renderimage(data)
    });



*/
