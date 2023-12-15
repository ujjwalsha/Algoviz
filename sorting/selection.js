async function selectionSort(array){
    console.log('in selection sort');

    let bars = document.querySelectorAll(".bar");
    for(let i = 0; i <= array.length-1; i++)
    {
        console.log("in ith loop");

        let minIndex = i;
      
        bars[i].style.background = "green"; 

        for(let j = i+1; j < array.length; j++)
        {
        // await sleep(40);
            console.log("in jth loop");
            
        bars[j].style.background = "red";

            await waitforme(delay);
            if(array[j] < array[minIndex])
            {
                if(minIndex != i)
                {
                    bars[minIndex].style.background = "lightgreen";
                }
               
               minIndex = j;
        // await sleep(40);


            }
            else{
                bars[j].style.background = 'transparent';
            }

           
        }
        await waitforme(delay);

        // swap(bars[minIndex], bars[i]);

        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;

        // await sleep(40);

        bars[minIndex].style.height = array[minIndex]*20 + "px";
        bars[minIndex].innerHTML  = array[minIndex];

        bars[i].style.height = array[i]*20 + "px";
        bars[i].innerHTML = array[i];
        // // bars[i].style.color = "blanchedalmond"; 
        // // await sleep(40);
       
       
    }



    return array;   
}