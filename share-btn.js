const button = document.getElementById("share");
const socialBar = document.querySelector(".social-bar"); 
const avatar = document.getElementsByClassName('avatar')[0];
const authorInfo = document.getElementsByClassName('article-author')[0];


// console.log(socialBar);
// console.dir(socialBar);

console.dir(socialBar.children);

button.addEventListener("click", toggleShare);

function toggleShare(e){

    if(!avatar.className.includes('hidden')){
        socialBar.children[0].classList.remove('hidden');
        socialBar.classList.add('toggleSocial');
        button.classList.add('buttonFix');
        avatar.classList.add('hidden');
        authorInfo.classList.add('hidden');

        console.log(avatar.className.includes('hidden'));
    } else {
        reset();
    }
}

function reset(){
    socialBar.children[0].classList.add('hidden');
    socialBar.classList.remove('toggleSocial');
    button.classList.remove('buttonFix');
    avatar.classList.remove('hidden');
    authorInfo.classList.remove('hidden');
}