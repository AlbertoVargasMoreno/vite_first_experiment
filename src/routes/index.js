import getHash from "../utils/getHash";
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Character from "../pages/Character";

const routes = {
    '': Home,
    'contact': Contact,
};

const router = async () => {
    const mainContainer = null || document.getElementById('app');

    let page = getHash();
    try {
        let render = routes[page];
        const result = await render();
        
        // Handle both string and object results
        if (typeof result === 'string') {
            mainContainer.innerHTML = result;
        } else {
            mainContainer.innerHTML = result.html;
            // Execute post-render initialization if provided
            if (result.init && typeof result.init === 'function') {
                result.init();
            }
        }
    } catch (error) {
        try {
            const result = await Character();
            if (typeof result === 'string') {
                mainContainer.innerHTML = result;
            } else {
                mainContainer.innerHTML = result.html;
                if (result.init && typeof result.init === 'function') {
                    result.init();
                }
            }
        } catch (error) {
            console.error(error);
            mainContainer.innerHTML = await NotFound();
        }
    }
}

export default router;
