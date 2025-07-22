// Get all buttons by class name
const buttons = document.querySelectorAll('button');

// Add click event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.innerText;
    alert(`You clicked: ${buttonText}`);
  });
});
