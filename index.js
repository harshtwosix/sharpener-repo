const form=document.querySelector('form');
const submit=document.querySelector('button');

submit.addEventListener('click',()=>{
    const name=document.querySelector('#name')
    const price=document.querySelector('#price')
    const category=document.querySelector('#category')
    
    const nameValue=name.value;
    const priceValue=price.value;
    const categoryValue=category.value;
    
    createCard(nameValue,priceValue,categoryValue);


})

function createCard(nameValue,priceValue,categoryValue){
     
    const displaydiv=document.querySelector('#display');

    const name=document.createElement(p);
    name.innerHTML=`Name:${nameValue}`;
    const price=document.createElement(p);
    name.innerHTML=`Price:${priceValue}`;
    const category=document.createElement(p);
    name.innerHTML=`Category:${nameValue}`;

    displaydiv.appendChild('name')
    displaydiv.appendChild('price')
    displaydiv.appendChild('category')

    
}