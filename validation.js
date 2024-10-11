function validateForm() {
    const requiredFields = [
        'firstName', 'lastName', 'email', 'phone', 'address', 
        'city', 'state', 'zip', 'country', 'educationLevel', 
        'educationType', 'resume', 'jobsApplied'
    ];

    for (const field of requiredFields) {
        const element = document.getElementById(field);
        if (!element.value) {
            alert(`${element.previousElementSibling.textContent} is required.`);
            return false;
        }
    }

    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const phoneRegex = /^[0-9\s-]+$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

function toggleEmployerFields() {
    const employerFields = document.getElementById('employerFields');
    employerFields.style.display = document.getElementById('employed').checked ? 'block' : 'none';
}
