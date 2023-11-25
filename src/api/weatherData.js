/* eslint-disable no-unused-vars */
const KEY = '123';
const url = 'https://api.weatherapi.com/v1/current.json';

const fetchData = async (city) => {
    const fetch = `${url}?key=${KEY}&q=${city}&aqi=no`;
    const dataResponse = await fetch(fetch)

    dataResponse.then((data) => {
        return data.json;
    })
}

export default fetchData;