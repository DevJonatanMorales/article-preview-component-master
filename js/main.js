const btn__share = document.getElementById("btn__share");
const share__links = document.getElementById("share__links");

const conponeteActivo = () => {
  btn__share.classList.toggle("btn__share-active");
  share__links.classList.toggle("share__links-active");
};

btn__share.addEventListener("click", () => conponeteActivo());
