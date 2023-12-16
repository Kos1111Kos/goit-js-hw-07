function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createBtn.addEventListener("click", () => createBoxes(Number(input.value)));
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    const message = "Please enter a number between 1 and 100";
    boxesContainer.innerHTML += `<p class="error-message">${message}</p>`;
    return;
  }

  boxesContainer.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }

  input.value = "";
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
