var textNum; 
var pronounNum = -1; 

var subject;
var object;
var possPro; 
var possAdj;
var reflexive; 
/*
Pronoun key:
0 - subject
1 - object
2 - possessive pronouns
3 - possessive adjectives
4 - reflective pronouns

*/

function generateText() {
    if (pronounNum < 0) {
        alert("Please select a pronoun to use!");
        return; 
    } else {
        if (pronounNum == 0) {
            subject = "he";
            object = "him";
            //etc someone pls do this :(
        } else if (pronounNum == 1) {
            //she
            
            
        } else if (pronounNum == 2) {
            //they
            
        } else if (pronounNum == 3) {
            //it
            
        } else if (pronounNum == 4) {
            //ze
            
        } else if (pronounNum == 5) {
            //ze
            
        } else if (pronounNum == 6) {
            //fae
            
        } else if (pronounNum == 7) {
            //per
            
        } else {
            //ey
            
        }
    }
    document.getElementById("select").style.display = "none";
    var elems = document.getElementsByClassName("pronoun-paragraph");
    console.log(elems);
    
    // specify a random index
    var index = Math.floor(Math.random() * (0 - elems.length + 1)) + elems.length;
    console.log(index);
    textNum = index; 


    // get the random element
    var randomElement = elems[index];
    console.log(randomElement);

    // do whatever
    randomElement.style.display = 'block';
    document.getElementById("check-btn").style.display = "block";

    document.getElementById("go-btn").style.display = "none";
  }

  function checkText() {
    if (textNum == 0) {
        var apples = document.getElementsByClassName("apple");
        var appleCheck = []
        console.log(apples);
    }

  }



const buttons = document.getElementsByTagName("button");
const result = document.getElementById("result");

let activeButton = null;

const buttonPressed = e => { 
  if (activeButton != null) {
    activeButton.style.background = "#32bacf"; // Replace with the original color of the button
  }
  
  e.target.style.background = "#ffa000"; 
  if(e.target.id == "he") {
    pronounNum = 0;
  }
  if(e.target.id == "she") {
    pronounNum = 1;
  }
  if(e.target.id == "they") {
    pronounNum = 2;
  }
  if(e.target.id == "it") {
    pronounNum = 3;
  }
  if(e.target.id == "xe") {
    pronounNum = 4;
  }
  if(e.target.id == "ze") {
    pronounNum = 5;
  }
  if(e.target.id == "fae") {
    pronounNum = 6;
  }
  if(e.target.id == "per") {
    pronounNum = 7;
  }
  if(e.target.id == "ey") {
    pronounNum = 8;
  }
  console.log(pronounNum);
  activeButton = e.target;
}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
  
}

