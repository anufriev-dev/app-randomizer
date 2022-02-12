// показать button #copy
function VisiblBlockCopy(){
    document.getElementById('copy').style.display = 'inline-block';
}
// изменяет шрифт в зависимости от кол-во независимых значений;
function switchVal(int){
    let $pole = document.querySelector('#pole');
    if(int > 29){

        $pole.style.fontSize = '25px';
    }else if(int > 9){
        $pole.style.fontSize = '35px';
    }else if(int > 1){
        $pole.style.fontSize = '50px';
    }else{
        $pole.style.fontSize = '96px';
    }
}
