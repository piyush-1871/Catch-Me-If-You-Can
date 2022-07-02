var box = document.getElementById('catch');
window.addEventListener('load',function(){
    box.style.top = 50 + 'vh';
    box.style.left = 50 + 'vw';
});
function move(){
    box.style.top = (Math.random()*90)+'vh'
    box.style.left = (Math.random()*90)+'vw'
}