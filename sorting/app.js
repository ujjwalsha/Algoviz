// for slider
      let mySlider = document.querySelector("#input");
        let mySlider2 = document.querySelector("#range");

        let value = document.querySelector(".result");
        let value1 = document.querySelector(".resultSpeed");


 let block = document.querySelector('.sortBars');
 let containerBox = document.querySelector('.flex-container');
let randomArray = document.getElementById('random-array');
let sort_btn = document.getElementById("bubble-sort");
// let bubbleSort = document.getElementById('#bubble-sort');


let min = 5;
let max = mySlider.value;

let numOfBars = mySlider.value;
console.log("value of slider" +numOfBars);

let unsorted_array = new Array(numOfBars);

mySlider.addEventListener("input", () => {
    value.innerText = mySlider.value;
    // min = mySlider.value;
    // numOfBars = min;

    // return numOfBars;
    // console.log(min);
    // console.log(numOfBars);    
});



mySlider2.addEventListener("input", () => {
    value1.innerText = mySlider2.value;

});




//generate random number
function randomNum(min, max){
    return Math.floor(Math.random()*(max-min)) + min;
}


// let value2 = randomNum(min, max);
// console.log('value is ' +value2)


//create random array
function createRandomArray(){
    for(let i = 0; i <= numOfBars; i++)
    {
        unsorted_array[i] = randomNum(min, max);
        // console.log("number is " + unsorted_array[i]);
    }
}

// let bar = document.querySelector('bar')

// render the bars on the display
function renderBars(array){
    for(let i = 0; i < array.length; i++){
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.width = "2em";
        bar.innerHTML = array[i];
        bar.style.cssText = " color: black; padding: 0.5em; font-size:2em; "
        bar.style.backgroundColor = "aqua";
        bar.style.border = "1px solid blanchedalmond";
        bar.style.height = array[i]*25 + "px";
        containerBox.appendChild(bar);
    }

        
    
}

randomArray.addEventListener("click", function(array){
    createRandomArray();
    containerBox.innerHTML = "";
    renderBars(unsorted_array);    
});


//bubble sort
function bubbleSort(array){
    let bars = document.getElementsByClassName('bar');

    for(let i = 0; i < array.length; i++)
    {
        for(let j = 0; j <= array.length - i -1; j++)
        {
            if(array[j] > array[j+1])
            {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

                bars[j].style.height = array[j]*20 + "px";
                bars[j].style.backgroundColor = "blanchedalmond";
                bars[j].innerHTML = array[j];

                bars[j+1].style.height = array[j+1]*20 + "px";
                bars[j+1].style.backgroundColor = "blanchedalmond";
                bars[j+1].innerHTML = array[j+1];
                // console.log(bars);
            }
        }
    }
    return array;
}



sort_btn.addEventListener("click", function(array){
    

    let sorted_array = bubbleSort(unsorted_array);
    console.log(sorted_array);
    
});











