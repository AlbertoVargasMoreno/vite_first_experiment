async function HeroTemplate(
  paragraphText = ''
  , href = '#/'
  , btnText = 'button'
) {
    return `
    <div class="hero">
        <p>${paragraphText}</p>
        <div class="card">
            <a href="${href}" type="button">
                ${btnText}
            </a>
        </div>
    </div>
    `;
}

export default HeroTemplate;