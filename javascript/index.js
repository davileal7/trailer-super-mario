const botao = document.querySelector('.botao-trailer');
const fechar = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const modal = document.querySelector('.modal');
const linkdoVideo = video.src;

function alternarModal() {
    modal.classList.toggle('aberto')
};

botao.addEventListener('click', () => {
    alternarModal();
    video.setAttribute('src', linkdoVideo)
});

fechar.addEventListener('click', () => {
    alternarModal();
    video.setAttribute('src', '');
});




