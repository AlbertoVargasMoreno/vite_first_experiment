import viteLogo from '../img/vite.svg'
import HeroTemplate from "../templates/HeroTemplate";

const Contact = async () => {
    const heroSection = await HeroTemplate(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda sit laudantium fuga temporibus, debitis voluptates exercitationem corporis ducimus laboriosam earum necessitatibus vel, sunt ipsam incidunt cum aliquam at impedit",
        '#/',
        'Take me back Home!'
    );
    const view = `
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
    <h1>Contact me!</h1>
    ${heroSection}
    `;
    return view;
}

export default Contact;
