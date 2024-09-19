const buttonNext = document.querySelector("#prevNext");
const buttonPrev = document.querySelector("#prevStep");
const spans = [...document.querySelectorAll("span")];
const step1 = document.querySelector("#step1");
const step2 = document.querySelector("#step2");
const step3 = document.querySelector("#step3");

let currentStep = 1;

function showStep(value) {
  switch (value) {
    case 1:
      firstStep();
      break;
    case 2:
      secondStep();
      break;
    case 3:
      thirdStep();
      break;
    default:
      return null;
  }
}

function secondStep() {
  step1.style.display = "none";
  step2.style.display = "flex";
  step3.style.display = "none";

  spans[0].classList.remove("ativo");
  spans[1].classList.add("ativo");
  spans[2].classList.remove("ativo");

  buttonNext.textContent = "CONTINUAR";
}

function firstStep() {
  step1.style.display = "flex";
  spans[0].classList.add("ativo");
  spans[1].classList.remove("ativo");
  step2.style.display = "none";

  buttonNext.textContent = "CONTINUAR";
}

function thirdStep() {
  step1.style.display = "none";
  step2.style.display = "none";
  step3.style.display = "flex";

  spans[1].classList.remove("ativo");
  spans[0].classList.remove("ativo");
  spans[2].classList.add("ativo");

  buttonNext.textContent = "ENVIAR RESPOSTAS";
}

buttonNext.addEventListener("click", (event) => {
  event.preventDefault();
  currentStep++;
  showStep(currentStep);
});

buttonPrev.addEventListener("click", (event) => {
  event.preventDefault();
  currentStep--;
  showStep(currentStep);
});
