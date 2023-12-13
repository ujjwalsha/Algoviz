async function insertionSort(arr){
    disable_input();
    console.log('in insertionSort()');

    let bars = document.querySelectorAll(".bar");
    bars[0].style.background = 'green';
    for(let i = 1; i < arr.length; i++)
    {
        console.log('in ith loop');

        let j = i-1;

        let current = arr[i];
        await waitforme(delay);

        while(arr[j] > current && j >= 0)
        {
            bars[j].style.background = 'lightblue';
            arr[j+1] = arr[j];
            bars[j+1].style.height = bars[j].style.height; 
            j--;

            await waitforme(delay);

            for(let k = i; k >= 0; k--)
            {
                bars[k].style.background = 'green';
            }

        }
        arr[j+1] = current;
        bars[j+1].style.height = current;

        bars[j+1].style.height = arr[j+1]*20 + "px";
        bars[j+1].innerHTML  = arr[j+1];
    }


        return arr;
}