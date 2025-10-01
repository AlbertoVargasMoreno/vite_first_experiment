import Home from '../pages/Home';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const routes = {
    '/': Home,
    '/contact': Contact,
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

const getHash = () => {
    const pageName = location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '';
    return `/${pageName}`;
}

export default router;
