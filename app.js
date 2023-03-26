const toggleButton = document.querySelector('.toggle-button');
const list = document.querySelector('.nav-list');

toggleButton.addEventListener('click', () => {
    list.classList.toggle('active')
})

