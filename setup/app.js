const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    //get random number between 0 - 3 colors[]
     const randomNumber = getRandomNumber();
     console.log(randomNumber)
     document.body.style.backgroundColor = colors[randomNumber];
     color.textContent = colors[randomNumber]; 
});

function getRandomNumber() {
    // creates the random number through the math.random prebuilt function and math floor brings the number to our array 0 - 3 whole number  
    return Math.floor(Math.random() * colors.length);
}