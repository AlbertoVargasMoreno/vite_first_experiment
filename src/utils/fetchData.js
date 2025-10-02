const API = 'https://rickandmortyapi.com/api/character/';

const fetchData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error('Fetch Error', error);
    }
}

export default fetchData;