import Home from './pages/Home';
import Contact from './pages/Contact';

const routes = {
    '/': Home,
    '/contact': Contact,
};

const router = async () => {
    const mainContainer = null || document.getElementById('app');

    let page = getHash();
    let render = routes[page];
    mainContainer.innerHTML = await render();
}

const getHash = () => {
    const pageName = location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '';
    return `/${pageName}`;
}

// export default router;
window.addEventListener('load', router);
window.addEventListener('hashchange', router);