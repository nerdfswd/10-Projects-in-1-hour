const btn= document.getElementById('btn');
const nav= document.getElementById('nav');
const close= document.getElementById('close');
btn.addEventListener('click',() =>{
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});

close.addEventListener('click',() => {
    nav.classList.remove('active');
    btn.classList.remove('active');
});