export default function init (el) {
    const pics = el.querySelectorAll('picture');
    pics.forEach(pic => {
        pic.className = 'carousel-picture';
    });

    const backButton = document.createElement('button');
    backButton.innerHTML = 'Back';
    backButton.className = 'carousel-back';

    const forwardButton = document.createElement('button');
    forwardButton.innerHTML = 'Forward';
    forwardButton.className = 'carousel-forward';

    el.append(backButton, forwardButton);
}