/* ============================= Webpack ====================================*/
import { inputRange_j$ } from "./inputRange.js";
import { script_j$ } from "./script.js";
/* ========================================================================= */

/*Эта переменная динамически изменяется при вызове функции range(), она хранит значения range input от 1 до 50*/ 
window.fullValForRandomX = {
    value: 1,
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
        $pole.style.display = 'table-cell';
    }else if(int > 8){
        $pole.style.fontSize = '35px';
        $pole.style.display = 'table-cell';
    }else if(int > 1){
        $pole.style.fontSize = '50px';
        $pole.style.display = 'table-cell';
    }else{
        $pole.style.fontSize = '96px';
        $pole.style.display = 'table-cell';
    }
}
// выполняе сортировку контента, dom-elementa, от повторяющихся чисел 
export function repeatSort($selector){
    let arrContent = $selector.textContent.split(' ');
    let resultContent = arrContent.filter((el,index) => arrContent.indexOf(el) == index);
    $selector.innerHTML = resultContent.join(' ');
}
