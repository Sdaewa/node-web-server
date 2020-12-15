const request = require('request');
const timeStamp = require('./timeStamp');


const weather = (coordinates, callback) => {

    const APIKeyWeather = '74f4bf17ed114b75739eede7500f9219';
    const APIURLWeather = `http://api.weatherstack.com/current?access_key=${APIKeyWeather}&query=${coordinates}`;

    request({
        url: APIURLWeather,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback(`Low Level Error Weather API`, undefined);
        } else if (body.error) {
            callback(`Provide valid coordinates`, undefined);
        } else {
            callback(undefined, {
                temp: body.current.temperature,
                rain: body.current.precip,
                forecast: body.current.weather_descriptions[0],
                timeCheck: body.current.observation_time
            });
        }
    });
}


module.exports = weather;