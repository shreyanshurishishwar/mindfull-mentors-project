document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const mentor = document.getElementById('mentor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const confirmationMessage = `You have booked an appointment with ${mentor} on ${date} at ${time}.`;

    document.getElementById('appointment-details').textContent = confirmationMessage;
    document.getElementById('confirmation').classList.remove('hidden');
    
    // Reset the form
    this.reset();
});


