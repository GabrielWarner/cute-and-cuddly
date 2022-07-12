# cute and cuddly

A simple page that links to third party API and provides pictures and a bit of information related to the searchable breed of various cats and dogs for user referance. Individual pages for dog search and cat search. and additioanl page with a game for users to choose which animal they think is cuter.

When the dog page loads, you are presented with a user input field that prompts you to type a breed. There is a search button to the right called search. When a user enters a breed the fetch function will return a breed an populate a card with the breeds image and information about the breed. If the fetch function cannot match the users input with anything in the database a function will run giving the user an error. The user can click on the image to see it in fullscreen on the center of their page.

When the cat mode page loads, you are presented with a user input field that prompts you to type a breed. There is a modal button to the right called breed list that allows
you to look up, copy, and paste breeds. It also has a button with and event listener that, upon being clicked, takes you to the dog mode page. When you submit something into the input field, a picture of that cat breed and some facts about that cat populate to the screen. if an invalid breed is entered, the user is prompted with a 
message in the input field as a placeholder that says to click on the breed list modal
On the Compare page there were multiple processes used, involving connecting to both API's and allowing for some error catching on certain selections in each object array as some would return null data. After importing the images into each column respectfully we used on click function to make the functionality of the game work.

While clicking on either image, using local storage we created an object housing both a statement and respecting value to help create a score sheet. Each tine clicking on the respectful button incrementing the value for dog or cat alike.

The score sheet is a modal that appears on screen and the outside area is the clickable selection so you can exit. The clear button on the screen does use an alert only to give warning for absolute clearing of the data, otherwise it wasn't a necessary component.

Github:

https://github.com/GabrielWarner/cute-and-cuddly

Deployed Link:

https://gabrielwarner.github.io/cute-and-cuddly/

Screenshots:

<img width="1285" alt="ss-home" src="https://user-images.githubusercontent.com/106774335/178576547-3e505826-76e5-4966-9bcd-88acce680f23.png">


<img width="1279" alt="ss-dog" src="https://user-images.githubusercontent.com/106774335/178576520-30ce8d22-a617-4419-8180-7b3124ecb12d.png">


<img width="1282" alt="ss-cat" src="https://user-images.githubusercontent.com/106774335/178576488-b4067de7-fa0a-4b3c-8bd0-6ade061657e8.png">


<img width="1274" alt="ss-compare" src="https://user-images.githubusercontent.com/106774335/178576507-c1ed7b47-1f87-4b88-9537-dbfc4316c7a5.png">


