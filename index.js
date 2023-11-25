const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach((faqButton) => {
  faqButton.addEventListener('click', () => {
    faqButtons.forEach(otherFaqButton => {
      if (otherFaqButton != faqButton) {
        otherFaqButton.classList.remove('activate-button');
        
        const otherAnswer = otherFaqButton.nextElementSibling;
        otherAnswer.classList.remove('display-faq-answer');
      }
    })

    faqButton.classList.toggle('activate-button');

    const answer = faqButton.nextElementSibling;
    answer.classList.toggle('display-faq-answer');
  });
});