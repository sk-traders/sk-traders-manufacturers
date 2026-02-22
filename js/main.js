console.log("SK Traders premium website loaded");

// FAQ Accordion Script
document.addEventListener("DOMContentLoaded", function () {
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach(button => {
    button.addEventListener("click", function () {
      const item = this.parentElement;

      document.querySelectorAll(".faq-item").forEach(faq => {
        if (faq !== item) {
          faq.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });
});
