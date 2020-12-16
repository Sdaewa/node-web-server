const submitBtn = document.getElementById('submit-btn');
console.log(submitBtn)
const input = document.getElementById('input');


fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log('error');
        } else {
            console.log(data);
        };
    });
});

const submitLocation = (location) => {
    return location = input.value;
}



submitBtn.addEventListener('submit', submitLocation);