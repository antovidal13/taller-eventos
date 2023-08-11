const div=document.querySelectorAll('.btn');

div.forEach(function(div){
    div.addEventListener('click', function(){
        alert('Hola! Soy el div');
    });
});