
document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('contact').value;

    // Create an object to represent the appointment
    const appointment = {
        name,
        email,
        phone,
    };

    // Get existing appointments from localStorage or initialize an empty array
    const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];

    // Add the new appointment to the array
    existingAppointments.push(appointment);

    // Save the updated array back to localStorage
   // localStorage.setItem('appointments', JSON.stringify(existingAppointments));
     axios.post("https://crudcrud.com/api/ce9a290d0b1a478cac3a4b9341e05ae7/appointmentData",appointment)
     .then((response)=>{
        displayAppointments(response.data)
     })
     .catch((err)=>{
        console.log(err)
     })
    // Optional: Display a success message or update the UI
    alert('Appointment booked successfully!');
    //displayAppointments()
});

function displayAppointments() {
    const appointmentsList = document.getElementById('appointmentsList');
    appointmentsList.innerHTML = ''; // Clear the existing content

    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    appointments.forEach((appointment, index) => {
        const appointmentDiv = document.createElement('div');
        appointmentDiv.classList.add('appointment-item');

        // Display appointment details
        appointmentDiv.innerHTML = `
            <p><strong>Name:</strong> ${appointment.name}</p>
            <p><strong>Email ID:</strong> ${appointment.email}</p>
            <p><strong>Phone:</strong> ${appointment.phone}</p>
            
        `;

        appointmentsList.appendChild(appointmentDiv);
    });
}