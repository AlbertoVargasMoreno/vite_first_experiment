
const getHash = () => {
    const pageName = location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '';
    return `${pageName}`;
}

export default getHash;