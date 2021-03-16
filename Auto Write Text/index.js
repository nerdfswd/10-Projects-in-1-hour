const text = 'Hello! This is a simple Auto-Write Text Challenge!';
let index =0; 

const container = document.getElementById('container');

function autowrite()
{
    container.innerText = text.slice(0,index);
    index++;
    if(index> text.length){
        index=0;
    } 
}
setInterval(autowrite,100);