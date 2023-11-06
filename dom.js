//QuerySelector

let seconditem=document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color="green";

let thirditem=document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.color="transparent";

//QuerySelectorALL



let odd=document.querySelectorAll('li:nth-child(odd)');

for(let i=0;i<odd.length;i++){

    odd[i].style.color="green";

}

let even=document.querySelectorAll('li:nth-child(even)');

for(let i=0;i<even.length;i++){

if(i==0){
    even[i].style.color="red";
}

}



