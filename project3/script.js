// eventListener
let num =0;
function incrementclicked(){
    const spanelement = document.querySelector('#counter')
    num++;
    // if(num == 5 ){
    //     num =0
    // }
    spanelement.innerText = num;
}

const incermentbtn = document.querySelector('#increment');
incermentbtn.addEventListener('click',incrementclicked);



// eventListener

function decrementclicked(){
    const spanelement = document.querySelector('#counter')
    num--;
    // if(num == 5 ){
    //     num =0
    // }
    spanelement.innerText = num;
}

const decrementbtn = document.querySelector('#decrement');
decrementbtn.addEventListener('click',decrementclicked);
