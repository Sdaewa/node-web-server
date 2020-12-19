const weatherForm = document.querySelector('form');
const input = document.querySelector('input');
const msgOne = document.querySelector('#message-one');
const msgTwo = document.querySelector('#message-two');



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = input.value;

    msgOne.textContent = 'Loading...';
    msgTwo.textContent = '';
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msgOne.textContent = data.error;
            } else {
                msgOne.textContent = data.Forecast;
                msgTwo.textContent = data.Location;
            };
        });
    });
});