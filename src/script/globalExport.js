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
        $pole.style.fontSize = '30px';
        $pole.style.display = 'table-cell';
    }else if(int > 1){
        $pole.style.fontSize = '50px';
        $pole.style.display = 'table-cell';
    }else{
        $pole.style.fontSize = '96px';
        $pole.style.display = 'table-cell';
    }
}
// создаёт спаны на основе строки, полученной в #pole для изменения цвета рядом стоящих чисел
export function colorPick($pole){
    let arr$pole = document.querySelector('#pole').textContent.split(' ');
    $pole.innerHTML = ' ';
    for(let i = 0; i < arr$pole.length; i++){
        if(i % 2 != 0){
            document.querySelector('#pole').insertAdjacentHTML('afterbegin',`<span class="span">${arr$pole[i]}</span> `)
        }else{
            document.querySelector('#pole').insertAdjacentHTML('afterbegin',`<span class="span2">${arr$pole[i]}</span> `)
        } 
    }
}
// создаёт спаны, без валидации (repeatSort - и есть валидация)
let count = 0;
export function colorPickNoValid(ran) {
    let $el = '';
    if(count % 2 != 0){
        $el = `<span class="span">${ran}</span> `
        count++;
    }else{
        $el = `<span class="span2">${ran}</span> `
        count++;
    }
    document.querySelector('#pole').insertAdjacentHTML('afterbegin',$el); 
}
// выполняе сортировку контента, dom-elementa, от повторяющихся чисел 
export function repeatSort($selector){
    let arrContent = $selector.textContent.split(' ');
    let resultContent = arrContent.filter((el,index) => arrContent.indexOf(el) == index);
    $selector.innerHTML = resultContent.join(' ');
}
