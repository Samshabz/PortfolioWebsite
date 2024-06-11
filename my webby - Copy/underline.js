document.addEventListener('DOMContentLoaded', (event) => {
  const underlineChange = document.getElementById('underline-change');
  const typingDuration = 1.4 * 1000 + 0.35 * 1000; // Typing duration in milliseconds

  setTimeout(() => {
    underlineChange.classList.add('underline');
  }, typingDuration);
});
