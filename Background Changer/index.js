const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    document.body.style.background= colorChange();
});

function colorChange(){
    return `hsl(${Math.floor(Math.random() * 2000)},100%,50%)`;
}