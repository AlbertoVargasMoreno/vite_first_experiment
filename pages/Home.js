import javascriptLogo from '../javascript.svg'

const Home = async () => {
    const view = `
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>This the home page!</h1>
    <div class="hero">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda sit laudantium fuga temporibus, debitis voluptates exercitationem corporis ducimus laboriosam earum necessitatibus vel, sunt ipsam incidunt cum aliquam at impedit</p>
        <div class="card">
            <a href="#/contact" type="button">Go to Contact!</a>
        </div>
    </div>
    `
    return view;
}

export default Home;