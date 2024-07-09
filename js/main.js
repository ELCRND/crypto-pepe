const key = document.querySelector("#key");
const tooltip = document.querySelector(".tooltip");

// копирование кода в буфер обмена

document.querySelector("#copy").addEventListener("click", () => {
  navigator.clipboard.writeText(key.innerText);
  tooltip.classList.add("visible");
  setTimeout(() => tooltip.classList.remove("visible"), 400);
});
