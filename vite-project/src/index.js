const divE = document.getElementById('root');

const button = document.createElement('button');
button.textContent = 'Click me';
divE.appendChild(button);


button.addEventListener('click', () => {
  alert('Button clicked!');
});