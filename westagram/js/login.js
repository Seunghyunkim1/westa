
const thisIsId = document.getElementsByClassName('input-part-detail-1')[0];
const thisIsPw = document.getElementsByClassName('input-part-detail-2')[0];
const btn = document.getElementsByClassName('botton')[0];




const pwReact = () => {
    if(thisIsId.value.length && thisIsPw.value.length){
        btn.style.backgroundColor = '#0099ff';
    } else {
        btn.style.backgroundColor = '#87cefa';
    }
};

document.addEventListener('keyup', pwReact);   
// thisIsPw.addEventListener('keydown', function(e)){





  

    
