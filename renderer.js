document.addEventListener('DOMContentLoaded', () => {
    const splashIntro = document.getElementById('splash-intro');
    const homeWindow = document.getElementById('home-window');

    if (!splashIntro || !homeWindow) {
        console.error('Missing required elements');
        return;
    }

    setTimeout(() => {
        splashIntro.classList.add('is-hiding');
        setTimeout(() => {
            splashIntro.hidden = true;
            homeWindow.hidden = false;
        }, 300);
    }, 6000);
})