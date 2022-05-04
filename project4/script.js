const counter = document.querySelector("#counter");
const ulelement = document.querySelector('#listitem');

let count = 0;

const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");

    
    
increment.addEventListener('click',incrementclicked);
decrement.addEventListener('click',decrementclicked)


function incrementclicked(){
    count++;
    counter.innerText = count;
    // create an element

    const boldelement = document.createElement('b');
    const lielement = document.createElement('li');
    const boldtextchild = document.createTextNode('Sentence ');
    const textchild = document.createTextNode(count);
    
    lielement.setAttribute('data-count',count)
    
    boldelement.appendChild(boldtextchild);
    lielement.appendChild(boldelement);
    lielement.appendChild(textchild)
 
    // this could also be written as follows 
    // lielement.innerHTML = '<b>Sentence</b>' + count;
    // this will do the same thing as the above useage 
    // not completely same we cannot add event listners in this way while using innerHTML 


    // apend the element as the child 
    ulelement.appendChild(lielement);
}

function decrementclicked(){
    const lielement = document.querySelector('[data-count = "'+count+'"]')
    lielement.remove();
    count--;
    counter.innerText = count;
}