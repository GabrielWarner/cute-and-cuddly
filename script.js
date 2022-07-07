

function getNameInfo () {

    var apiUrl = `https://api.thedogapi.com/v1/breeds/search?q=ger&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854`

    fetch(apiUrl)
    .then(function(res){
        return res.json();
    })
    .then(function(apidata){
        searchImage(apidata)
    })
}



/*resultEL = document.getElementById("result");
var y = document.get
var dogUrl = "https://api.thedogapi.com/v1/breeds/search?q=ger&api_key=3ad6ad84-85c0-4f2f-ad38-5b2e4d83c854";
console.log(dogUrl)


function searchImage(apidata) {
    var dogImg = document.createElement("img");
    dogImg.setAttribute("src", dogUrl);
    resultEL.appendChild(dogImg);

    console.log(apidata)
}
*/
resultEL = document.getElementById("result");
var y = document.get
var dogUrl = "https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2022/03/teddybear-dog-breeds.jpeg";
console.log(dogUrl)


function searchImage(apidata) {
    var dogImg = document.createElement("img");
    dogImg.setAttribute("src", dogUrl);
    resultEL.appendChild(dogImg);
// nned to set an image into image spot I just created
    console.log(apidata)
}



 