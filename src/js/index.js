const btnTrailer = document.querySelector('.btn-trailer');
const modal = document.querySelector('.modal');
const btnFecharModal = document.querySelector('.modal-close');
const video = document.getElementById('video');
const link = video.src;

btnTrailer.addEventListener("click", () => {
    video.setAttribute("src", link);
    modal.classList.add("open");
});

btnFecharModal.addEventListener("click", () => {
    video.setAttribute("src", "");
    modal.classList.remove("open");
});