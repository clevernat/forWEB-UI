// date and time
const labelDate = document.querySelector('.date');

const currentDate = new Date()

const options = {
    // month: 'long',
    year: 'numeric',
}

labelDate.textContent = new Intl.DateTimeFormat(navigator.languages, options).format(currentDate);




// tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))