// Год в подвале
document.getElementById("year").textContent = new Date().getFullYear();

// Мобильное меню
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => nav.classList.toggle("is-open"));
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => nav.classList.remove("is-open"))
);

// Аккордеон FAQ
document.querySelectorAll(".faq__item").forEach((item) => {
  const q = item.querySelector(".faq__q");
  const a = item.querySelector(".faq__a");
  q.addEventListener("click", () => {
    const open = item.classList.contains("is-open");
    document.querySelectorAll(".faq__item").forEach((i) => {
      i.classList.remove("is-open");
      i.querySelector(".faq__a").style.maxHeight = null;
    });
    if (!open) {
      item.classList.add("is-open");
      a.style.maxHeight = a.scrollHeight + "px";
    }
  });
});
