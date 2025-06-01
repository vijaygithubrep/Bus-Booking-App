document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    const messageDiv = document.getElementById('message');

    const API_URL = 'https://crudcrud.com/api/307dd93e6f6c4f6186d47b9c72afc672/bookings';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const booking = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            carNumber: document.getElementById('carNumber').value
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(booking)
            });

            if (response.ok) {
                messageDiv.textContent = 'Booking saved successfully!';
                form.reset();
            } else {
                messageDiv.textContent = 'Failed to save booking.';
                console.error('Error:', await response.text());
            }
        } catch (error) {
            messageDiv.textContent = 'Error connecting to server.';
            console.error('Error:', error);
        }
    });
});
