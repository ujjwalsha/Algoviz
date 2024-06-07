async function bubbleSort(array){

    let bars = document.getElementsByClassName('bar');
    for(let i = 0; i < array.length; i++)
    {
        for(let j = 0; j <= array.length - i -1; j++)
        {
            if(array[j] > array[j+1])
            {
                 for(let k = 0; k < bars.length; k++){
                     if(k != j+1)
                     {
                         bars[k].style.backgroundColor = "#00162b";
                     }
                }

                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

                bars[j+1].style.height = array[j+1]*20 + "px";
                bars[j+1].style.backgroundColor = "aqua";
                bars[j+1].innerHTML = array[j+1];

                bars[j].style.height = array[j]*20 + "px";
                // bars[j].style.backgroundColor = "blanchedalmond";
                bars[j].innerHTML = array[j];
                bars[j].style.color = "blanchedalmond";
                // bars[j].innerHTML.style.color = "black";


                await sleep(50);
            }
        
        }
        await sleep(30);
         
    }

    return array;
}

