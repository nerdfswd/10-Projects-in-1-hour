const imgs = document.getElementById('image-container');
const img = document.querySelectorAll('#image-container img');
let index=0;

function run(){
    index++;
    if(index > img.length-1){
        index=0;
    }
    imgs.style.transform = `translateX(${-index * 500}px)`;
}
setInterval(run,2000);