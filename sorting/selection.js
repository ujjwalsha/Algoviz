function selectionSort(array){
    let bars = document.getElementsByClassName('bar');
    for(let i = 0; i < array.length-1; i++)
    {
        let minIndex = i;

        for(let j = i+1; j <array.length; j++)
        {
            if(array[j] < array[minIndex])
            {
                minIndex = j;
            }
        }

        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;

        bars[i].style.height = array[i]*20 + "px";
        bars[i].innerHTML = array[i];
        bars[i].style.color = "blanchedalmond";            

    }

    return array;
}