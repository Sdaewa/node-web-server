const request = require('request');


const geocode = (address, callback) => {

    const APIKeyMapbox = 'pk.eyJ1IjoibHI5MSIsImEiOiJja2h3M3hoOWwwNTRsMzBuYjZsOTN4MG0xIn0.k7Xmb4W29GxS7Robc7wqTg';
    const APIURLMapbox = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${APIKeyMapbox}`;

    request({
        url: APIURLMapbox,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback(`Low Level Error Geocode API`, undefined);
        }
        if (body.features.length === 0) {
            callback(`Provide valid address`, undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    });
}


module.exports = geocode;