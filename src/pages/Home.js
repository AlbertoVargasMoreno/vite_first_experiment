import javascriptLogo from '../img/javascript.svg'
import fetchData from "../utils/fetchData";
import HeroTemplate from "../templates/HeroTemplate";
import BarChart from "./BarChart.js";

const Home = async () => {
    const characters = await fetchData();
    const charactersArray = characters?.results.map(character => character);

    let charactersCards = ``;
    charactersArray.forEach(character => {
        charactersCards += `
            <article class="Characters-item">
                <a href="#/${character.id}">
                    <img src="${character.image}" alt="${character.name}" srcset="">
                    <h2> ${character.name} </h2>
                </a>
            </article>
        `;
    });
    const heroSection = await HeroTemplate(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda sit laudantium fuga temporibus, debitis voluptates exercitationem corporis ducimus laboriosam earum necessitatibus vel, sunt ipsam incidunt cum aliquam at impedit",
        '#/contact',
        'Go to Contact!'
    );
    const chartId = 'acquisitions';
    const view = `
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>This the home page!</h1>
    <div class="chart-container" style="width: 800px; margin: 20px auto;">
        <canvas id="${chartId}"></canvas>
    </div>
    ${heroSection}
    <div class="Characters">
        ${charactersCards}
    </div>
    `;

    setTimeout(() => {
        BarChart(chartId, []);
    }, 0);

    return view;
}

export default Home;