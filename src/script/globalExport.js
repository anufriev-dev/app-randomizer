/* ============================= Webpack ====================================*/
import { inputRange_j$ } from "./inputRange";
import { script_j$ } from "./script";
/* ========================================================================= */

window.fullValForRandomX = {
    value: 0,
}

// показать button #copy
export function VisiblBlockCopy(){
    document.getElementById('copy').style.display = 'inline-block';
}
// изменяет шрифт в зависимости от кол-во независимых значений;
export function switchVal(int){
    let $pole = document.querySelector('#pole');
    if(int > 29){

        $pole.style.fontSize = '25px';
    }else if(int > 8){
        $pole.style.fontSize = '35px';
    }else if(int > 1){
        $pole.style.fontSize = '50px';
    }else{
        $pole.style.fontSize = '96px';
    }
}
// выполняе сортировку контента, dom-elementa, от повторяющихся чисел 
export function repeatSort($selector){
    let arrContent = $selector.textContent.split(' ');
    let resultContent = arrContent.filter((el,index) => arrContent.indexOf(el) == index);
    $selector.innerHTML = resultContent.join(' ');
}
