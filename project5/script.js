// getting an atribute value in js
// parseInt(element.getAttribute('data-name'),10)
// the second parameter 10 represents the base
let count = 0;
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");

const showele = document.querySelector("#counter");
const listelements = document.querySelector("#listitems");

function incrementclicked() {
  count++;
  showele.innerText = count;
  // create element
  const itemvalue = document.createElement("li");
  const boldelement = document.createElement("b");

  // creating text node to add the count value to the created element
  const boldtext = document.createTextNode("Sentence ");
  const showtext = document.createTextNode(count);

  // setting a new attribute to the list element so it becomeseasier to remove the element
  itemvalue.setAttribute("data-count", count);
  //we can also use this setAtribute to set ifferent stylings by naming it as different classes
  const numbercount = parseInt(itemvalue.getAttribute("data-count"), 10);
  if (numbercount % 2 == 0) {
    itemvalue.setAttribute("class", "red");
  } else {
    itemvalue.setAttribute("class", "blue");
  }
  // we can also set it using .style
  // element.style......
  

  
  //appending the created children one after another
  boldelement.appendChild(boldtext);
  itemvalue.appendChild(boldelement);
  itemvalue.appendChild(showtext);

  listelements.appendChild(itemvalue);
}

function decrementclicked() {
  const itemvalue = document.querySelector('[data-count="' + count + '"]');
  itemvalue.remove();
  count--;
  showele.innerText = count;
}

increment.addEventListener("click", incrementclicked);
decrement.addEventListener("click", decrementclicked);
