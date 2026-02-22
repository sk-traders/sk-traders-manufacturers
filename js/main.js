console.log("SK Traders premium website loaded");

// FAQ Accordion Script
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", function () {
      const item = this.closest(".faq-item");

      document.querySelectorAll(".faq-item").forEach(faq => {
        if (faq !== item) faq.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });
});

// FAQ Accordion Script
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
      const item = question.closest(".faq-item");

      document.querySelectorAll(".faq-item").forEach(faq => {
        if (faq !== item) {
          faq.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });
});
