import getHash from "../utils/getHash";
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Character from "../pages/Character";

const routes = {
    '': Home,
    'contact': Contact,
    '1': Character
};

const router = async () => {
    const mainContainer = null || document.getElementById('app');

    let page = getHash();
    try {
        let render = routes[page];
        mainContainer.innerHTML = await render();
    } catch (error) {
        mainContainer.innerHTML = await NotFound();
    }
}

export default router;
