const interval = 5000;
const sliders = [...document.querySelectorAll(".recomendacion")];
const buttonNext = document.querySelector("#next");
const buttonBefore = document.querySelector("#before");
console.log(sliders);

let value;

buttonNext.addEventListener("click", () => {
  changePosition(1);
});

buttonBefore.addEventListener("click", () => {
  changePosition(-1);
});

const changePosition = (add) => {
  const currentRecomendation = document.querySelector(".recomendacion--show")
    .dataset.id;
  value = Number(currentRecomendation);
  value += add;

  sliders[Number(currentRecomendation) - 1].classList.remove(
    "recomendacion--show"
  );

  if (value === sliders.length + 1 || value === 0) {
    value = value === 0 ? sliders.length : 1;
  }

  sliders[value - 1].classList.add("recomendacion--show");
};
