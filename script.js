const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.logreg-box');
const registerLink = document.querySelector('.logreg-box');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

// loginLink.addEventListener('click', () => {
//     logregBox.classList.remove('active');
// });