import javascriptLogo from '../img/javascript.svg'
import fetchData from "../utils/fetchData";

const Home = async () => {
    const characters = await fetchData();
    const charactersArray = characters?.results.map(character => character);

    let charactersCards = ``;
    charactersArray.forEach(character => {
        charactersCards += `
            <article class="Character-item">
                <a href="#/${character.id}" target="_blank" rel="noopener noreferrer">
                    <img src="${character.image}" alt="${character.name}" srcset="">
                    <h2> ${character.name} </h2>
                </a>
            </article>
        `;
    });
    const view = `
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>This the home page!</h1>
    <div class="hero">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda sit laudantium fuga temporibus, debitis voluptates exercitationem corporis ducimus laboriosam earum necessitatibus vel, sunt ipsam incidunt cum aliquam at impedit</p>
        <div class="card">
            <a href="#/contact" type="button">Go to Contact!</a>
        </div>
    </div>
    ${charactersCards}
    `;

    return view;
}

export default Home;