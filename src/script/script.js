import { VisiblBlockCopy,colorPick,colorPickNoValid,repeatSort,switchVal } from "./globalExport.js";
export let script_j$;

const $random = document.querySelector('#random');
$random.addEventListener('click',rand);

let max = 10;

function rand(){
    switchVal(fullValForRandomX.value);
    /*Логика чисел: Из диапазона */
    if(document.querySelector('#changePoleOne') != null){
        const maxInput = document.querySelector('#maxInput').value;
        const minInput = document.querySelector('#minInput').value;
                    if(maxInput > 10000000 && fullValForRandomX.value != 1){   //если больше то делает инлайн-блок, что в свою очередб применяет св-во owerflow (по умолчанию display: table-cell)
                        document.querySelector('#pole').style.display = 'inline-block';
                    }
                    if(minInput > 10000000 && fullValForRandomX.value != 1){ 
                        document.querySelector('#pole').style.display = 'inline-block';
                    }
        if(fullValForRandomX.value == 1){
            let ran = randomValue(Number(maxInput),Number(minInput));
                    if(ran > 10000000){
                        document.querySelector('#pole').style.fontSize = '25px';
                    }else{
                        document.querySelector('#pole').style.fontSize = '96px';
                        document.querySelector('#pole').style.display = 'table-cell';
                    }
            document.querySelector('#pole').innerHTML = ran;
        }else{
            let infinit__checkbox = document.querySelector('.infinit__checkbox');
            if(infinit__checkbox.checked){
                let $pole = document.querySelector('#pole');
                $pole.innerHTML = ' ';

                for(let i = 0; i <fullValForRandomX.value ;i++){
                    let ran = randomValue(Number(maxInput),Number(minInput));
                    $pole.firstChild.nodeValue += ran + " ";
                }
                repeatSort($pole);
                colorPick($pole);
            }else{
                document.querySelector('#pole').innerHTML = ' ';
                for(let i = 0; i <fullValForRandomX.value ;i++){
                    let ran = randomValue(Number(maxInput),Number(minInput));
                    colorPickNoValid(ran);
                }
            }
        }
        document.getElementById('copy').style.display = 'inline-block';
        /*Логика чисел: Из списка(textarea) */
    }else if(document.querySelector('#changePoleTwo') != null){
        let $textarea = document.querySelector('.textarea').value;

        if(fullValForRandomX.value == 1){
            let arr = $textarea.split(' ');
            let filtss = arr.filter(el => el != '');
            let map = filtss.map(el => Number(el));
            let arrClear = map.filter(el => !(Number.isNaN(el)));
            if(arrClear.length === -0 ){
                document.querySelector('#copy').style.display = 'none';
                document.getElementById('pole').innerHTML = 'Нет чисел';
                return;
            }
            let index = Math.round(Math.random() * (arrClear.length - 1));
                        if(arrClear[0] > 10000000){
                            document.querySelector('#pole').style.display = 'inline-block';
                        }
            document.getElementById('pole').innerHTML = Number(arrClear[index]);

        }else{
            let infinit__checkbox = document.querySelector('.infinit__checkbox');
            if(infinit__checkbox.checked){
                let $pole = document.querySelector('#pole');
                $pole.innerHTML = ' ';
                for(let i = 0; i < fullValForRandomX.value ;i++){
                    let arr = $textarea.split(' ');
                    let filtss = arr.filter(el => el != '');
                    let map = filtss.map(el => Number(el));
                    let arrClear = map.filter(el => !(Number.isNaN(el)));
                    if(arrClear.length === -0 ){
                        document.querySelector('#copy').style.display = 'none';
                        document.getElementById('pole').innerHTML = 'Нет чисел';
                        return;
                    }
                                if(arrClear[i] > 10000000){
                                    document.querySelector('#pole').style.display = 'inline-block';
                                }
                    let index = Math.round(Math.random() * (arrClear.length - 1));
                    document.querySelector('#pole').firstChild.nodeValue += Number(arrClear[index]) + " ";
                }
                repeatSort($pole);
                colorPick($pole);
            }else{
                document.querySelector('#pole').innerHTML = ' ';
                for(let i = 0; i < fullValForRandomX.value ;i++){
                    let arr = $textarea.split(' ');
                    let filtss = arr.filter(el => el != '');
                    let map = filtss.map(el => Number(el));
                    let arrClear = map.filter(el => !(Number.isNaN(el)));
                    if(arrClear.length === -0 ){
                        document.querySelector('#copy').style.display = 'none';
                        document.getElementById('pole').innerHTML = 'Нет чисел';
                        throw new Error('');
                    }

                            if(arrClear[i] > 10000000){ 
                                document.querySelector('#pole').style.display = 'inline-block';
                            }
                    let index = Math.round(Math.random() * (arrClear.length - 1));
                    document.querySelector('#pole').firstChild.nodeValue += Number(arrClear[index]) + " ";
                }
                let arr$pole = document.querySelector('#pole').textContent.split(' ');
                document.querySelector('#pole').innerHTML = ' ';
                for(let i = 0; i < arr$pole.length ; i++){
                    if(i % 2 != 0){
                        document.querySelector('#pole').insertAdjacentHTML('afterbegin',`<span class="span">${arr$pole[i]}</span> `)
                    }else{
                        document.querySelector('#pole').insertAdjacentHTML('afterbegin',`<span class="span2">${arr$pole[i]}</span> `)
                    } 
                }
            }
        }
        VisiblBlockCopy();
        /* Логика чисел: Шаблонная*/
    }else{
       
        if(fullValForRandomX.value == 1){
            let $pole = document.getElementById('pole');
            let ran = randomValue(max);
            $pole.innerHTML = ran;
            VisiblBlockCopy();
        }else{
            let infinit__checkbox = document.querySelector('.infinit__checkbox');
            if(infinit__checkbox.checked){
                let $pole = document.getElementById('pole');
                $pole.innerHTML = ' ';
                for(let i = 0; i < fullValForRandomX.value; i++){
                    let ran = randomValue(max);
                    $pole.firstChild.nodeValue += ran + " "; 
                }
                repeatSort($pole);
                colorPick($pole);
            }else{
                let $pole = document.getElementById('pole');
                $pole.innerHTML = ' ';
                for(let i = 0; i < fullValForRandomX.value; i++){
                    let ran = randomValue(max);
                    colorPickNoValid(ran);
                }
            }
            VisiblBlockCopy();
        }
    }
} 

function randomValue(max,min = 0){
    return Math.round(Math.random() * (max - min) + min);
}
const $select = document.querySelector('#select');

$select.addEventListener('change',(e)=>{
    switch(e.target.value){
        case '1':
            max = 10;
            break;
        case '2':
            max = 100;
            break;
        case '3':
            max = 1000;
            break;
        case '4':
            max = 10000;
            break;
        case '5':
            max = 100000;
            break;
        case '6':
            max = 1000000;
            break;
        case '7':
            option();
            break;
        case '8':
            option();
            break;

        default: max = 10;
    }
})
/* Список динамических элементов */
const htmlList = `
    <div class="changePole" id="changePoleOne">
    <span>От</span>
    <input id="minInput" class="poleInput" type="number" placeholder="∞" value="1" onkeydown="return event.keyCode !== 69">
    <span>До</span>
    <input id="maxInput" class="poleInput" type="number" placeholder="∞" value="100" onkeydown="return event.keyCode !== 69">
    <button class="backInput">Назад</button>
    </div>
`;
const htmlTextArea = `
<button class="backInput">Назад</button>
<div class="changePole" id="changePoleTwo">
<textarea name="" class="textarea" placeholder="Укажите список целых чисел"></textarea>
</div>
`;
//Render dom-Elements
function option () {
    
  let select = document.querySelector('#select').value;
    if(select == 7){
        let $select = document.querySelector('#select');
        $select.style.display = 'none';
        let $wrapMain = document.querySelector('#panel');
        $wrapMain.insertAdjacentHTML('beforeend', htmlList);
    }else if(select == 8){     
        let $select = document.querySelector('#select');
        $select.style.display = 'none';
        let $wrapMain = document.querySelector('#panel');
        $wrapMain.insertAdjacentHTML('beforeend', htmlTextArea);
    }

const backInput = document?.querySelector('.backInput');
  backInput?.addEventListener('click', () => {
    let $changePole = document.querySelector('.changePole');
    $changePole.remove(backInput);
    //remove
    let backinput = document.querySelector('.backInput');
    if(backinput != null){
    let $back = document.querySelector('.backInput');
    $back.remove(backInput);
    }
    //
    let $select_1 = document.querySelector('#select');
    $select_1.style.display = 'inline-block';
    $select_1.value = 1;
    max = 10;
    });
}
//Button copy
const copy = document.querySelector('#copy');
copy.addEventListener('click',()=>{
    let poles = document.querySelector('#pole');
    window.navigator.clipboard.writeText(poles.textContent);
})