const Name=document.querySelector('#name')
const Place=document.querySelector('#place')
const Contact=document.querySelector('#contact')
const Submit=document.querySelector('#submit');

Submit.addEventListener('click',uploadOnCRUD)

function uploadOnCRUD(){
       const NameValue=Name.value;
       const PlaceValue=Place.value;
       const ContactValue=Contact.value;

       axios.post('https://crudcrud.com/api/823acc0465ee4fc9b0134e65ff92469e/appointmentDATA',{
        "Name": NameValue,
        "Place": PlaceValue,
        "Contact": ContactValue
       })
       .then(res=>console.log(res))
       .catch(err=>console.log(err))

      
}

function showOnDashboard(res){
    const display=document.querySelector('#res')
    for(i=0;i<res.length;i++){
        const card=document.createElement('div')
        card.innerHTML=`Name: ${res[i].Name} Place: ${res[i].Place} Phone: ${res[i].Contact}`
        display.appendChild(card);
    }
    
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/823acc0465ee4fc9b0134e65ff92469e/appointmentDATA')
    .then(res=>{
        showOnDashboard(res.data)
    })
})