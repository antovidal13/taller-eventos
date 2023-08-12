const div=document.querySelectorAll('.btn');

div.forEach(function(div){
    div.addEventListener('click', function(){
        alert('Hola! Soy el div');
    });
});


//solucion-click
const container=document.getElementById('container');
const boton=document.getElementById('boton');

container.addEventListener('click',function(event){
    event.stopPropagation();
});

boton.addEventListener('click', function(event){
    event.stopPropagation();
});


