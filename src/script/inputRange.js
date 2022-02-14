export let inputRange_j$;

document.querySelector('#range').addEventListener('input', range);
function range(){
    const val = document.querySelector('#range').value;
    let maxVal = document.querySelector('#range').max;
    let values = (val * 100) /maxVal;
    let $range = document.querySelector('#range');
    $range.style.background = `-webkit-linear-gradient(left,#00ff0d 0%, #00ff0d ${values + ''}%, #fff ${values + ''}%, #fff 100%)`;
    const $poleInputRangeValue = document.querySelector('.poleInputRange');
    $poleInputRangeValue.innerHTML = `кол-во независимых элементов: ${val}`;
    if(val >= 2){
        let $infinit = document.querySelector('.infinit');
        $infinit.style.opacity = '1';
        $infinit.style.transition = '0.5s;';
        $infinit.style.display = 'inline-block';

    }else{
        let $infinit = document.querySelector('.infinit');
        $infinit.style.opacity = '0';
        $infinit.style.transition = '0.5s;';
        let infinit__checkbox = document.querySelector('.infinit__checkbox');
        infinit__checkbox.checked = false;
    }
    fullValForRandomX.value = val;
}