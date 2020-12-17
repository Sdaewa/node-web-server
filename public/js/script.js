const weatherForm = document.querySelector('form');
const input = document.querySelector('input');






weatherForm.addEventListener('submit', (e) => {
    const location = input.value;
    e.preventDefault();
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log('error');
            } else {
                console.log(data);
            };
        });
    });
});