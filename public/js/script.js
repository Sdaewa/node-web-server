const submitBtn = document.getElementById('submitBtn');


fetch('http://localhost:3000/weather?address=london').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log('error');
        } else {
            console.log(data);
        };
    });
});