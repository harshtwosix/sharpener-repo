const Name=document.querySelector('#name')
const Place=document.querySelector('#place')
const Contact=document.querySelector('#contact')
const Submit=document.querySelector('#submit');


Submit.addEventListener('click',uploadOnCRUD)

function uploadOnCRUD(){
       const NameValue=Name.value;
       const PlaceValue=Place.value;
       const ContactValue=Contact.value;

       axios.post('https://crudcrud.com/api/a630a97560cd4dbdbd85ddf7263c8d9b/appointmentDATA',{
        "Name": NameValue,
        "Place": PlaceValue,
        "Contact": ContactValue
       })
       .then(res=>window.location.reload())
       .catch(err=>console.log(err))

      
}

function showOnDashboard(res){
    const display=document.querySelector('#res')
    for(let i=0;i<res.length;i++){
        const card=document.createElement('div')
        const button=document.createElement('button')
        button.innerHTML='delete'
        button.setAttribute('id',`delete${i}`);
        button.addEventListener('click',()=>deleteFunction(res[i]._id))
        card.innerHTML=`Name: ${res[i].Name} Place: ${res[i].Place} Phone: ${res[i].Contact}`
        card.appendChild(button);
        display.appendChild(card);
    }
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/a630a97560cd4dbdbd85ddf7263c8d9b/appointmentDATA')
    .then(res=>{
        showOnDashboard(res.data)

    })

})

function deleteFunction(id){
     axios.delete(`https://crudcrud.com/api/a630a97560cd4dbdbd85ddf7263c8d9b/appointmentDATA/${id}`)
     .then(res=>{
        window.location.reload()
     })
}


