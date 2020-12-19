const weatherForm = document.querySelector('form');
const input = document.querySelector('input');
const msgOne = document.querySelector('#message-one');
const msgTwo = document.querySelector('#message-two');
const msgThree = document.querySelector('#message-three');
const msgFour = document.querySelector('#message-four');
const msgFive = document.querySelector('#message-five');


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
                msgOne.textContent = data.Location;
                msgTwo.textContent = data.Forecast;
                msgThree.textContent = data.Temperature;
                msgFour.textContent = data.ChancesOfRain;
                msgFive.textContent = data.CheckedAt;
                console.log(data)
            };
        });
    });
});