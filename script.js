/*

function getRndmimage() {
    var apiUrl = `https://api.thedogapi.com/v1/breeds/search?q=ger&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854`

    fetch(apiUrl)
    .then(function(res){
        return res.json();
    })
    .then(function(apidata){
        searchImage(apidata)
    })
}

function searchImage(apidata) {
    var dogImg = document.createElement("img");
    dogImg.setAttribute("src", dogUrl);
    resultEL.appendChild(dogImg);

    console.log(apidata)
}

resultEL = document.getElementById("result");
var y = document.get
var dogUrl = "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2022/03/teddybear-dog-breeds.jpeg";
console.log(dogUrl)


function searchImage(apidata) {
    var dogImg = document.createElement("img");
    dogImg.setAttribute("src", dogUrl);
    resultEL.appendChild(dogImg);
// need to set an image into image spot I just created
    console.log(apidata)
    getImageInfo()
}

function getImageInfo() {
    //create a variable for the ID and pass in this function
    var apiUrl = `https://api.thedogapi.com/v1/images/103&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854`

    fetch(apiUrl)
    .then(function(res){
        return res.json();
    })
    .then(function(apidata){
        console.log(apidata)
    })
}


*/




const url = "https://api.thedogapi.com/v1";
fetch(url, {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Auth-Token": "3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854",
    "Content-Type": "application/json"
  }
})
  .then(resp => resp.json())
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });




function getRndmimage(url, callback) {
    var thisPage = new XMLHttpRequest();
    thisPage.onreadystatechange = 
    
    function() {
      if (thisPage.readyState == 4 && thisPage.status == 200) {
        console.log('responseText:' + thisPage.responseText);
        try {
          var data = JSON.parse(thisPage.responseText);
        } catch (err) {
          console.log(err.message + " in " + thisPage.responseText);
          return;
        }
        callback(data);
      }
    };
  
    thisPage.open("GET", url, true);
    thisPage.send();
  }
  
  getRndmimage('https://api.thedogapi.com/v1/images/search?size=full', function(data) {
    document.getElementById("id").innerHTML = data[0]["id"];
    document.getElementById("url").innerHTML = data[0]["url"];
  
    var html = '<img src="' + data[0]["url"] + '">';
    document.getElementById("image").innerHTML = html;
  });
  