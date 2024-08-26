document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const parkingLot = document.getElementById('parking-lot');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple login validation (for demonstration purposes)
        if (username === 'student' && password === 'password' ||
            username === 'staff' && password === 'password' ||
            username === 'security' && password === 'password') {
            loginForm.style.display = 'none';
            parkingLot.style.display = 'block';
            simulateParkingStatus();
        } else {
            alert('Invalid login credentials');
        }
    });

    function simulateParkingStatus() {
        const parkingSpots = document.querySelectorAll('.parking-spot');
        parkingSpots.forEach(spot => {
            const isOccupied = Math.random() > 0.5;
            if (isOccupied) {
                spot.classList.add('occupied');
                spot.textContent += ' - Occupied';
            } else {
                spot.classList.add('available');
                spot.textContent += ' - Available';
            }
        });
    }
});
