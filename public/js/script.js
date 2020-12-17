const weatherForm = document.querySelector('form');



fetch(`http://localhost:3000/weather?address=!`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log('error');
        } else {
            console.log(data);
        };
    });
});


weatherForm.addEventListener('submit', () => {
    console.log('testis');
});