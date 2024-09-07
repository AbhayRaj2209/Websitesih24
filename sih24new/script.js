
document.querySelector('.dropdown').addEventListener('mouseenter', function () {
    document.querySelector('.dropdown-content').style.display = 'block';
});

document.querySelector('.dropdown').addEventListener('mouseleave', function () {
    document.querySelector('.dropdown-content').style.display = 'none';
});

document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const graduationYear = document.getElementById('graduation-year').value;
    const fieldOfStudy = document.getElementById('field-of-study').value;
    const location = document.getElementById('location').value;

    if (name && email && graduationYear && fieldOfStudy && location) {
        alert(`Thank you for registering, ${name}!`);
        
        document.getElementById('registration-form').reset();
    } else {
        alert('Please fill out all the fields.');
    }
});


document.getElementById('donation-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const donationAmount = document.getElementById('donation-amount').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (donationAmount > 0 && paymentMethod) {
        alert(`Thank you for your donation of $${donationAmount}!`);
        
        document.getElementById('donation-form').reset();
    } else {
        alert('Please enter a valid donation amount and select a payment method.');
    }
});


document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function () {
        alert('This feature is coming soon!');
    });
});
