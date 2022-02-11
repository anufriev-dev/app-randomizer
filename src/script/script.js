const $random = document.querySelector('#random');
$random.addEventListener('click',rand);

let max = 10;

function rand(){
    if(document.querySelector('#changePoleOne') != null){
        const maxInput = document.querySelector('#maxInput').value;
        const minInput = document.querySelector('#minInput').value;
        let ran = randomValue(Number(maxInput),Number(minInput));

        document.getElementById('pole').innerHTML = ran;
        document.getElementById('copy').style.display = 'inline-block';
    }else if(document.querySelector('#changePoleTwo') != null){
        let $textarea = document.querySelector('.textarea').value;
        if($textarea == ''){
            return -1;
        }
        let arr = $textarea.split(' ');
        let filtss = arr.filter(el => el != '');
        let map = filtss.map(el => Number(el));
        let arrClear = map.filter(el => !(Number.isNaN(el)));
        if(arrClear.length === -0 ){
            document.querySelector('#copy').style.display = 'none';
            document.getElementById('pole').innerHTML = 'Нет чисел';
            throw new Error('');
        }
        let index = Math.round(Math.random() * (arrClear.length - 1));

        document.getElementById('pole').innerHTML = Number(arrClear[index]);
        document.getElementById('copy').style.display = 'inline-block';
    }else{
        let ran = randomValue(max);
        document.getElementById('pole').innerHTML = ran;
        document.getElementById('copy').style.display = 'inline-block';
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
    <input id="minInput" class="poleInput" type="text" placeholder="1">
    <span>До</span>
    <input id="maxInput" class="poleInput" type="text" placeholder="10">
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
async function option(){
    let select = document.querySelector('#select').value;
    if(select == 7){
        await new Promise(resolve => {
            let $select = document.querySelector('#select');
            $select.style.display = 'none';
            let $wrapMain = document.querySelector('#panel');
            $wrapMain.insertAdjacentHTML('beforeend', htmlList);
            resolve();
        });
    }else if(select == 8){
        await new Promise(resolve => {
            let $select = document.querySelector('#select');
            $select.style.display = 'none';
            let $wrapMain = document.querySelector('#panel');
            $wrapMain.insertAdjacentHTML('beforeend', htmlTextArea);
            resolve();
        });
    }
    await new Promise(resolve => {
        const backInput = document.querySelector('.backInput');
        backInput.addEventListener('click', () => {
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
        resolve();
    });
});
}
//Button copy
const copy = document.querySelector('#copy');
copy.addEventListener('click',()=>{
    let poles = document.querySelector('#pole');
    window.navigator.clipboard.writeText(poles.textContent);
})

