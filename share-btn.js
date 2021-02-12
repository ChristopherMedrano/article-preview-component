const button = document.getElementById("share");
const socialBar = document.querySelector(".social-bar");
const shareIcons = document.querySelector('.share-icons');
let screenSize = screen.width;
button.addEventListener("click", toggleShare);

function toggleShare(e) {

    if (!shareIcons.className.includes('hidden')) {
        shareIcons.classList.add('hidden');
        socialBar.style.background = 'white';
    } else {
        reset();
    }
}

function reset() {
    shareIcons.classList.remove('hidden');
    if (screenSize < 768) {
        socialBar.style.background = 'hsl(217, 19%, 35%)';
    } else {
        socialBar.style.background = 'white';
    }
}