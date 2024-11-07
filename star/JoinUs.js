document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Display success message
    document.getElementById('successMessage').style.display = 'block';
});