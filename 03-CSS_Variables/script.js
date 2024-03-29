let root = document.documentElement;

const inputs = [...document.querySelectorAll(".controls input")];

inputs.forEach(input => input.addEventListener("input", updateElements));

function updateElements() {
  root.style.setProperty(`--${this.name}`, `${this.value}${this.dataset.sizing || ""}`);
}
