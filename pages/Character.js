import getHash from "../utils/getHash";
import fetchData from "../utils/fetchData";

const Character = async () => {
    const URI = getHash();
    const id = URI;
    const character = await fetchData(id);

    const view = `
    <div class="Chracters-inner">
        <article class="Characters-card">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        </article>
        <article class="Characters-card">
            <h3>
                Episodes:
                <span>
                    ${character.episode.length}
                </span>
            </h3>
            <h3>
                Status:
                <span>
                    ${character.status}
                </span>
            </h3>
            <h3>
                Species:
                <span>
                    ${character.species}
                </span>
            </h3>
            <h3>
                Gender:
                <span>
                    ${character.gender}
                </span>
            </h3>
            <h3>
                Origin:
                <span>
                    ${character.origin.name}
                </span>
            </h3>
            <h3>
                Last Location:
                <span>
                    ${character.location.name}
                </span>
            </h3>
        </article>
    </div>
    `;
    return view;
}

export default Character;