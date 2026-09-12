const mensajes = [
    "Eres lo mejor que me ha pasado 💖",
    "Gracias por cada día a mi lado 🌹",
    "Tu sonrisa ilumina todo ✨",
    "Te amo más de lo que las palabras pueden decir 💌",
    "Cada momento contigo es especial 🌈",
    "Eres mi lugar favorito 💖",   
    "Contigo todo es mejor ✨", 
    "Mi persona favorita 🌹", 
    "Te elijo todos los días 💌", 
    "Gracias por existir 🌈", 
    "Mi corazón es tuyo 💘", 
    "Eres mi sueño hecho realidad 🌟", 
    "Contigo el tiempo vuela ⏳", 
    "Te quiero más que ayer 💕", 
    "Eres increíble 🌺", 
    "Eres mi todo 🌍", 
    "Mi corazón late por ti 💓", 
    "Eres mi razón de sonreír 😄"

];

const imgsobre = [
    'fotos/f1.jpeg',
    'fotos/f2.jpeg',
    'fotos/f3.jpeg',
    'fotos/f4.jpeg'
];
const fondos = [
    'fotos/fo1.jpeg',
    'fotos/fo2.jpeg',
    'fotos/fo3.jpeg',
    'fotos/fo4.jpeg',
    'fotos/fo5.jpeg'

];

const contenedor = document.getElementById('contenedor');

mensajes.forEach((texto, i) => {
    const sobre = document.createElement('div');
    sobre.className = 'sobre';
    sobre.innerHTML = '<img src="' + imgsobre[i % imgsobre.length] + '" alt="Sobre">';
    sobre.style.top = Math.random() * 80 + '%';
    sobre.style.left = Math.random() * 80 + '%';

    let velX = (Math.random() - 0.5) * 0.5;
    let velY = (Math.random() - 0.5) * 0.5;
    let posX = parseFloat(sobre.style.left);
    let posY = parseFloat(sobre.style.top);

    function flotar() {
        posX += velX;
        posY += velY;

        if (posX < 0 || posX > 80) velX *= -1;
        if (posY < 0 || posY > 80) velY *= -1;

        sobre.style.left = posX + '%';
        sobre.style.top = posY + '%';

        requestAnimationFrame(flotar);
    }

    sobre.addEventListener('click', (e) => {
        e.stopPropagation();
        abrirSobre(sobre, texto, fondos[i % fondos.length]);
    });

    contenedor.appendChild(sobre);
    flotar();
});

function abrirSobre(sobre, texto, fondo) {
    document.querySelectorAll('.sobre.seleccionado').forEach(s => s.classList.remove('seleccionado'));

    sobre.classList.add('seleccionado');

    const mensaje = document.createElement('div');
    mensaje.className = 'mensaje visible';
    mensaje.style.backgroundImage = 'url(' + fondo +')';
    mensaje.innerHTML = '<span class="texto-mensaje">' + texto + '</span>';
    document.body.appendChild(mensaje);
}
 

document.body.addEventListener('click', () => {
    document.querySelectorAll('.sobre.seleccionado').forEach(s => s.classList.remove('seleccionado'));
    document.querySelectorAll('.mensaje').forEach(m => m.remove());
});
