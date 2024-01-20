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
       .then(res=>showOnDashboard(res))
       .catch(err=>console.log(err))

      
}

function showOnDashboard(res){
    const display=document.querySelector('#res')
    const card=document.createElement('div')
    card.innerHTML=`Name: ${res.data["Name"]} Place: ${res.data["Place"]} Phone: ${res.data["Contact"]}`
    display.appendChild(card);
}