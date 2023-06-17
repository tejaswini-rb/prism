var textNum; 
var pronounNum = -1; 

var subject;
var object;
var possPro; 
var possAdj;
var reflexive; 

var blanks; 
var checks; 
var answers; 

var isCorrect = true;
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
            possPro = "his";
            possAdj = "his";
            reflexive = "himself";
        } else if (pronounNum == 1) {
            //she
            subject = "she";
            object = "her";
            possPro = "hers";
            possAdj = "her";
            reflexive = "herself";
            
            
        } else if (pronounNum == 2) {
          subject = "they";
          object = "them";
          possPro = "theirs";
          possAdj = "their";
          reflexive = "themselves";
            
        } else if (pronounNum == 3) {
          subject = "it";
          object = "it";
          possPro = "its";
          possAdj = "its";
          reflexive = "itself";
            
        } else if (pronounNum == 4) {
          subject = "xe";
          object = "xem";
          possPro = "xyr";
          possAdj = "xyr";
          reflexive = "xemself";
            
        } else if (pronounNum == 5) {
            
            subject = "ze";
          object = "zir";
          possPro = "zirs";
          possAdj = "zir";
          reflexive = "zelf";
            
        } else if (pronounNum == 6) {
            //fae
            subject = "fae";
          object = "faer";
          possPro = "faer";
          possAdj = "faer";
          reflexive = "faeself";
        } else if (pronounNum == 7) {
            //per
            subject = "per";
          object = "per";
          possPro = "pers";
          possAdj = "per";
          reflexive = "perself";
            
        } else {
            //ey
            subject = "ey";
          object = "em";
          possPro = "eirs";
          possAdj = "eir";
          reflexive = "eirself";
            
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
        isCorrect = (document.getElementById("apple1").value == subject
        && document.getElementById("apple1").value == possAdj
        && document.getElementById("apple1").value == subject
        && document.getElementById("apple1").value == possAdj
        && document.getElementById("apple1").value == possAdj
        && document.getElementById("apple1").value == possAdj
        && document.getElementById("apple1").value == subject
        && document.getElementById("apple1").value == object
        && document.getElementById("apple1").value == object
        );
    } else if (textNum == 1) {
        isCorrect = (document.getElementById("quill1").value == subject
        && document.getElementById("quill2").value == reflexive
        && document.getElementById("quill3").value == possAdj
        && document.getElementById("quill4").value == subject
        && document.getElementById("quill5").value == subject
        && document.getElementById("quill6").value == subject
        && document.getElementById("quill7").value == subject
        && document.getElementById("quill8").value == subject
        && document.getElementById("quill9").value == possAdj
        && document.getElementById("quill10").value == subject
        && document.getElementById("quill11").value == object
        );
    } else if (textNum == 2) {
        isCorrect = (document.getElementById("mishap1").value == reflexive
        && document.getElementById("mishap2").value == subject
        && document.getElementById("mishap3").value == subject
        && document.getElementById("mishap4").value == subject
        && document.getElementById("mishap5").value == possAdj
        && document.getElementById("mishap6").value == possAdj
        && document.getElementById("mishap7").value == subject
        && document.getElementById("mishap8").value == subject
        && document.getElementById("mishap9").value == subject
        && document.getElementById("mishap10").value == possAdj
        );
    } else {
        isCorrect = (document.getElementById("artifact1").value == subject
        && document.getElementById("artifact2").value == possAdj
        && document.getElementById("artifact3").value == subject
        && document.getElementById("artifact4").value == subject
        && document.getElementById("artifact5").value == possAdj
        && document.getElementById("artifact6").value == possAdj
        );

    }
    console.log(isCorrect + " correct?");
    if (isCorrect) {
      document.getElementById("result-correct").style.display = "inline";
    } else {
      document.getElementById("result-incorrect").style.display = "inline";
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

