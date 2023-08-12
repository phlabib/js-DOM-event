//  option 1 : Directly set on the HTML element

// Option 2 : add onclick function
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// Option 3: add onclick function
    const makeGreenButton = document.getElementById("make-green");
makeGreenButton.onclick = makeGreen;
function makeGreen() {
  document.body.style.backgroundColor = "green";
}

// option 3 : anoter option
    const purpleButton = document.getElementById("make-purple");
    purpleButton.onclick = function makePurple(){
        document.body.style.backgroundColor = "purple"
    }