import viteLogo from '../vite.svg'

const Contact = async () => {
    const view = `
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
    <h1>Contact me!</h1>
    <div class="hero">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda sit laudantium fuga temporibus, debitis voluptates exercitationem corporis ducimus laboriosam earum necessitatibus vel, sunt ipsam incidunt cum aliquam at impedit</p>
        <div class="card">
            <a href="#/" type="button">Go back Home!</a>
        </div>
    </div>
    `;
    return view;
}

export default Contact;
