const name = document.querySelectorAll('.name');

// Click Anywhere in column to change its color -
name.forEach(element => {
    element.addEventListener('click', () => {
        name.forEach(child => {
            child.classList.toggle('change');
        })
    })
})