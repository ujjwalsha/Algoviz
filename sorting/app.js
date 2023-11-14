// for slider
      let mySlider = document.querySelector("#input");
        let mySlider2 = document.querySelector("#range");

        let value = document.querySelector(".result");
        let value1 = document.querySelector(".resultSpeed");

        mySlider.addEventListener("input", () =>{
            value.innerText = mySlider.value;
            // console.log(value.innerText);
        });
        
        mySlider2.addEventListener("input", () => {
            value1.innerText = mySlider2.value;
        });
        

 
 let block = document.querySelector('.sortBars');
 let containerBox = document.querySelector('.flex-container');
let randomArray = document.getElementById('random-array');
let sort_btn = document.getElementById("bubble-sort");
// let bubbleSort = document.getElementById('#bubble-sort');


let min = 1;
let max = mySlider.value;

let numOfBars = mySlider.value;
console.log("value of slider" +numOfBars);

let unsorted_array = new Array(numOfBars);

//create random number
function randomNum(min, max){
    return Math.floor(Math.random()*(max-min));
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

// createRandomArray();
function renderBars(array){
    for(let i = 0; i <= array.length; i++){
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.width = "2em";
        bar.style.backgroundColor = "aqua";
        bar.style.border = "1px solid blanchedalmond";
        bar.style.height = array[i]*10 + "px";
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
        for(let j = 0; j < array.length - i -1; j++)
        {
            if(array[j] > array[j+1])
            {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

                bars[j].style.height = array[j]*10 + "px";
                bars[j].style.backgroundColor = "blanchedalmond";
                // bars[j].innerText = array[j];

                bars[j+1].style.height = array[j+1]*10 + "px";
                bars[j+1].style.backgroundColor = "blanchedalmond";
                

            }
        }
    }

    return array;
}



sort_btn.addEventListener("click", function(array){
    let sorted_array = bubbleSort(unsorted_array);
    // console.log(sorted_array);
});











