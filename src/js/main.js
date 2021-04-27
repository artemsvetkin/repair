var button = document.querySelector('#button');
// мы объявили переменную button и обратились к кнопке в index.html c идентификатором button
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
button.addEventListener('click', function(){
    modal.classList.add('modal_active');
});

close.addEventListener('click', function(){
    modal.classList.remove('modal_active');
});