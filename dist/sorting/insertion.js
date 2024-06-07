async function insertionSort(array){
    console.log('in insertionSort()');

    let bars = document.querySelectorAll(".bar");

    bars[0].style.background = 'green';

    for(let i = 1; i < array.length; i++)
    {
        console.log('in ith loop');
        let current = array[i];

        let j = i-1;

        console.log("value of current", current);
        await waitforme(delay);

        while(array[j] > current && j >= 0)
        {
            bars[j].style.background = 'lightblue';
           
            bars[j+1].style.height = bars[j].style.height;
            bars[j+1].style.height = array[j+1]*20 + "px";

            array[j+1] = array[j];
            bars[j+1].innerHTML  = array[j]; 
        
            await waitforme(delay);

            for(let k = i; k >= 0; k--)
            {
                bars[k].style.background = 'green';
            }

            j--;

        }
        array[j+1] = current;
        // bars[j].style.height = array[j]*25 + "px";

        // bars[j+1].style.height = current;

        bars[j+1].style.height = array[j+1]*20 + "px";
        bars[j+1].innerHTML  = array[j+1];
    }

    await waitforme(delay);

        return array;
}

