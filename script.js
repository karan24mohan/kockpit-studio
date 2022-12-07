const allQuestions = document.querySelectorAll(".servers");
// const allAnswers = document.querySelectorAll(".faqs-tab-title-content");

allQuestions.forEach((item, index) => {
  item.addEventListener("click", () => {
    allQuestions.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
