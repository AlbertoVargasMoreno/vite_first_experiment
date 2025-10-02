import javascriptLogo from '../img/javascript.svg'
import fetchData from "../utils/fetchData";
import HeroTemplate from "../templates/HeroTemplate";
import Chart from 'chart.js/auto';

const initializeChart = async () => {
    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
    ];

    const ctx = document.getElementById('acquisitions');
    const options = {
        type: 'bar',
        data: {
            labels: data.map(row => row.year),
            datasets: [
                {
                    label: 'Acquisitions by year',
                    data: data.map(row => row.count)
                }
            ]
        }
    };
    new Chart(ctx, options);
}

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
    const view = `
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>This the home page!</h1>
    <div class="chart-container" style="width: 800px; margin: 20px auto;">
        <canvas id="acquisitions"></canvas>
    </div>
    ${heroSection}
    <div class="Characters">
        ${charactersCards}
    </div>
    `;

    setTimeout(() => {
        initializeChart();
    }, 0);

    return view;
}

export default Home;