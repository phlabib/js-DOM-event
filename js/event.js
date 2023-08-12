//  option 1 : Directly set on the HTML element
// <BUtton onclick="console.log(7)">cLICK ME</BUtton>


// Option 2 : add onclick function on the HTML elemen
// importent : [we will use this some time]
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


// Opiton : 4
    const pinkButton = document.getElementById('make-pink');
    pinkButton.addEventListener('click', makePink);
    function makePink (){
        document.body.style.backgroundColor = 'pink';
    }
// Option : 4 Another option
    const makeGrayButton = document.getElementById('make-gray');
    makeGrayButton.addEventListener('click', function makeGray(){
        document.body.style.backgroundColor = 'gray';
    } )
//  Option : 4 ( Final )
// importent : [we will use this some time]
    document.getElementById('make-goldenrod').addEventListener('click', function(){
        document.body.style.backgroundColor = 'goldenrod';
    })
   