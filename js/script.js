// Адаптивность и доступность
document.getElementById("fontIncrease")?.addEventListener("click", () => {
  let currentSize = parseInt(window.getComputedStyle(document.body).fontSize);
  document.body.style.fontSize = currentSize + 2 + "px";
});

document.getElementById("contrastToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Загрузка программ
fetch("data/programs.json")
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector(".program-list");
    if(container) {
      container.innerHTML = data.map(p => `<div class="program">${p.name}</div>`).join("");
    }
  });

// Загрузка сравнения
fetch("data/compare.json")
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector(".compare-table tbody");
    if(tbody) {
      tbody.innerHTML = data.map(p => `<tr>
        <td>${p.name}</td>
        <td>${p.price}</td>
        <td>${p.scores}</td>
        <td>${p.internship}</td>
      </tr>`).join("");
    }
  });

// Загрузка международных партнёров
fetch("data/international.json")
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector(".international-list");
    if(container) {
      container.innerHTML = data.map(p => `<div class="program">${p.name}</div>`).join("");
    }
  });
