const weatherForm = document.querySelector('form');
const input = document.querySelector('input');
const msgOne = document.getElementById('message-one');
const msgTwo = document.getElementById('message-two');



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = input.value;
    if (!location) {
        return console.log('Provide address');
    }
    const loading = document.createElement('p');
    loading.textContent = 'Loading';
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msgOne.textContent = '';
                msgTwo.textContent = 'Something went wrong';
            } else {
                msgTwo.textContent = '';
                msgOne.textContent = document.createElement('h2');
                msgOne.append(data);
                console.log(data);
            };
        });
    });
});