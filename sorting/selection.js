async function selectionSort(array){
    let bars = document.getElementsByClassName('bar');
    for(let i = 0; i < array.length-1; i++)
    {
        let minIndex = i;
        await sleep(40);


        for(let j = i+1; j <array.length; j++)
        {
        // await sleep(40);

            if(array[j] < array[minIndex])
            {
        // await sleep(40);

                for(let k = 0; k < bars.length; k++)
                {
                    if(k === j)
                    {
                    bars[k].style.backgroundColor = "#00162b";
                    }
                }
               
               minIndex = j;
        // await sleep(40);


            }
    

            
     
        
        await sleep(40);
        }

        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;

        // await sleep(40);


        bars[i].style.height = array[i]*20 + "px";
        bars[i].innerHTML = array[i];
        // bars[i].style.color = "blanchedalmond"; 
        // await sleep(40);
       
        bars[minIndex].style.height = array[minIndex]*20 + "px";
        bars[minIndex].innerHTML = array[minIndex];
        bars[minIndex].style.backgroundColor = "aqua";


        await sleep(40);
    }

    return array;
}