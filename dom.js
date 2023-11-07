let itemlist=document.querySelector("#items");

//parentnode
console.log(itemlist.parentNode);

//parentElement
console.log(itemlist.parentElement);

//childNode
console.log(itemlist.childNodes);

//firstChild
console.log(itemlist.firstChild);

//firstElementChild
console.log(itemlist.firstElementChild);

//lastElementChild
console.log(itemlist.lastElementChild);

//nextSibling
console.log(itemlist.nextSibling);

//nextElementSibling
console.log(itemlist.nextElementSibling);

//previousSibling
console.log(itemlist.previousSibling);

//previousElementSibling
console.log(itemlist.previousElementSibling);

//create Element

//create a div
let newDiv=document.createElement('div');

//add class
newDiv.className="hello";

//add id
newDiv.id="hello1";

//create text node
let newDivText=document.createTextNode("Hello World");

//add text to Div
newDiv.appendChild(newDivText);

let changeheader=document.querySelector("#header-title");

let newtext=document.createTextNode("HEllo World Item Lister");
changeheader.appendChild(newtext);
console.log(changeheader);





