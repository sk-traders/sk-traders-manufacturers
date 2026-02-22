console.log("SK Traders premium website loaded");

document.addEventListener("click", function (e) {
  const question = e.target.closest(".faq-question");
  if (!question) return;

  const item = question.closest(".faq-item");

  document.querySelectorAll(".faq-item").forEach(faq => {
    if (faq !== item) faq.classList.remove("active");
  });

  item.classList.toggle("active");
});
