const Name=document.querySelector('#name')
const Place=document.querySelector('#place')
const Contact=document.querySelector('#contact')
const Submit=document.querySelector('#submit');


Submit.addEventListener('click',uploadOnCRUD)

function uploadOnCRUD(){
       console.log("in upload");
       const NameValue=Name.value;
       const PlaceValue=Place.value;
       const ContactValue=Contact.value;

       axios.post('https://crudcrud.com/api/be3ca684f4794003ad4c7d3565e19731/appointmentDATA',{
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
        const button2=document.createElement('button')
        button2.innerHTML='edit'
        button.innerHTML='delete'
        button.addEventListener('click',()=>deleteFunction(res[i]._id))
        button2.addEventListener('click',()=>editFunction(res[i]._id))
        card.innerHTML=`Name: ${res[i].Name} Place: ${res[i].Place} Phone: ${res[i].Contact}`
        card.appendChild(button2);
        card.appendChild(button);
        button.style.marginLeft='4px'
        display.appendChild(card);
    }
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/be3ca684f4794003ad4c7d3565e19731/appointmentDATA')
    .then(res=>{
        showOnDashboard(res.data)

    })

})

function deleteFunction(id){
     axios.delete(`https://crudcrud.com/api/be3ca684f4794003ad4c7d3565e19731/appointmentDATA/${id}`)
     .then(res=>{
        window.location.reload()
     })
}

function editFunction(id){
   axios.get(`https://crudcrud.com/api/be3ca684f4794003ad4c7d3565e19731/appointmentDATA/${id}`)
   .then(res=>{
    Name.value=res.data.Name;
    Place.value=res.data.Place;
    Contact.value=res.data.Contact;

    Submit.removeEventListener('click',uploadOnCRUD);

    Submit.addEventListener('click',function (){
        
        const ModifiedName=Name.value;
        const ModifiedPlace=Place.value;
        const ModifiedContact=Contact.value;
        console.log("in edit")
        axios.put(`https://crudcrud.com/api/be3ca684f4794003ad4c7d3565e19731/appointmentDATA/${id}`,{
        "Name": ModifiedName,
        "Place": ModifiedPlace,
        "Contact": ModifiedContact
    })
    .then(res=>window.location.reload())
   }) 
    })
   
}


