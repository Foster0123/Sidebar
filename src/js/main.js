const close     = document.getElementById('xmark');
const container = document.getElementById('container');
const btn       = document.getElementById('btn');

close.addEventListener('click', () => {
    container.classList.toggle('no_display');
});
btn.addEventListener('click', () => {
    container.classList.remove('no_display');
})
