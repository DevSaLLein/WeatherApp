/* eslint-disable no-unused-vars */
const KEY = 'baf2c084012240e7a9a154834232909';
const url = 'https://api.weatherapi.com/v1/current.json';

const fetchData = async (city) => {
    const req = `${url}?key=${KEY}&q=${city}&aqi=no`;
    const fetchResponse = await fetch(req);

    return fetchResponse.json();
}

export default fetchData;