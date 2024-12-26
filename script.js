const darkModeButton = document.getElementById('toggleDarkMode');

darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Add a dark mode style
document.body.classList.add('dark-mode', `
  body.dark-mode {
    background-color: #333;
    color: #f0f8ff;
  }
`);
