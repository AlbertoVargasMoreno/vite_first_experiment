import getHash from "../utils/getHash";
import fetchData from "../utils/fetchData";

const Character = async () => {
    console.log('try Character');
    const urlParameter = getHash();
    console.log(urlParameter);
    const id = 1;
    const character = await fetchData(id);

    console.log(character);
    return `characterPage`;
}

export default Character;