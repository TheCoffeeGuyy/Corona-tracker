import axios from 'axios';


let URL = 'https://covid19.mathdro.id/api';

export const fetchData = async(country) => {
    let changeableURL = URL;
    if (country) changeableURL = `${URL}/countries/${country}`
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableURL);
        const modifiedData = { confirmed, deaths, recovered, lastUpdate };
        return modifiedData;

    } catch (error) {
        console.log(error);
    }
}
export const fetchDataDaily = async() => {
    try {
        const { data } = await axios.get(`${URL}/daily`);
        let modifiedData = data.map((element) => {
            return {
                totalConfirmed: element.totalConfirmed,
                deaths: element.deaths.total,
                reportDate: element.reportDate
            }
        })
        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}
export const fetchCoutries = async() => {
    try {
        const { data } = await axios.get(`${URL}/countries`);
        // let modifiedData = data.
        return data.countries;
    } catch (error) {
        console.log(error)
    }
}