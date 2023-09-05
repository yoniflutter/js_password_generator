var dialog = document.querySelector('.menu')

window.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
    dialog.classList.add('visible');
})

window.addEventListener('click', (e)=>{
    dialog.classList.remove('visible');
})