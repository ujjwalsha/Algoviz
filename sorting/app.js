// for slider
let mySlider = document.querySelector("#input");
let mySlider2 = document.querySelector("#range");

let value = document.querySelector(".result");
let value1 = document.querySelector(".resultSpeed");


let block = document.querySelector('.sortBars');
let containerBox = document.querySelector('.flex-container');
let randomArray = document.getElementById('random-array');
let bubble_btn = document.getElementById("bubble-sort");
let selection_btn = document.getElementById('selection-sort');
let insertion_btn = document.getElementById('insertion-sort');
// let delayElement = document.querySelector("#speed_input");



let min = 5;
let max = mySlider.value;

let numOfBars = mySlider.value;
console.log("value of slider" +numOfBars);

let unsorted_array = new Array(numOfBars);

//this rendering on display on everytime you are refeshing the page
createRandomArray();
renderBars(unsorted_array);


mySlider.addEventListener("input", () => {
    value.innerText = mySlider.value;
    // max = mySlider.value;   
});

// console.log("size of the array " +unsorted_array.length);

// function swap(x, y)
// {
//     let temp = x.style.height;
//     x.style.height = y.style.height;
//     y.style.height = temp;
// }

//generate random number
function randomNum(min, max){
    max = mySlider.value;
    return Math.floor(Math.random()*(max-min)) + min;
}

//create random array
function createRandomArray(){
    numOfBars = mySlider.value;
    for(let i = 0; i <= numOfBars; i++)
    {
        unsorted_array[i] = randomNum(min, max);
    }
}
// render the bars on the display
function renderBars(array){
    // let size = mySlider.value;
    array.length = mySlider.value;
    for(let i = 0; i < array.length; i++){
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.width = "2em";
        bar.innerHTML = array[i];
        bar.style.cssText = "color: blanchedalmond; padding: 0.5em; font-size:2em; transition: height 0.6s ease-in-out;";
        bar.style.border = "2px solid blanchedalmond";
        bar.style.height = array[i]*25 + "px";
        containerBox.appendChild(bar);
    }    
    // array.length = mySlider.value;
    

    
}

// create event on clicking new array button
randomArray.addEventListener("click", function(array){
    createRandomArray();
    containerBox.innerHTML = "";
    renderBars(unsorted_array);    
});


function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}


function disable_input(){
    let x = document.getElementsByTagName('input');
    for(let i = 0; i < x.length; i++)
    {
        x[i].disabled = true;
    }
}


function enable_input(){
    let x = document.getElementsByTagName('input');
    for(let i = 0; i < x.length; i++)
    {
        x[i].disabled = false;
    }
}



function waitforme(millisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, millisec); 
    }) 
} 

let delay = 100;


mySlider2.addEventListener("input", () => {
    value1.innerText = mySlider2.value;
    delay = 320 - parseInt(mySlider2.value);
});



bubble_btn.addEventListener("click", function(array){
    let sorted_array = bubbleSort(unsorted_array);
    console.log(sorted_array);
    
});

insertion_btn.addEventListener('click', function(array){
   let sorted_array =  insertionSort(unsorted_array);
    console.log(sorted_array);
});

selection_btn.addEventListener("click", function(){
    let sorted_array = selectionSort(unsorted_array);
    console.log(sorted_array);
});










