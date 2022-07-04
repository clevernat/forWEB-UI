// date and time
const labelDate = document.querySelector('.date');

const currentDate = new Date()

const options = {
    month: 'short',
    year: '2-digit',
}

labelDate.textContent = new Intl.DateTimeFormat(navigator.languages, options).format(currentDate);