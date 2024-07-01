document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.reveal', {
        duration: 1000, // Duração da animação em milissegundos
        distance: '50px', // Distância que o elemento se moverá durante a animação
        easing: 'ease-out', // Tipo de easing para a animação
        origin: 'bottom', // Origem da animação (top, right, bottom, left)
        reset: true // Se verdadeiro, a animação será executada toda vez que o elemento estiver na tela
    });
    ScrollReveal().reveal('.reveal-rotate', {
        duration: 2000,
        rotate: { x: 0, y: 80, z: 0 },
        opacity: 0.5,
        reset: true
    });
    ScrollReveal().reveal('.reveal-scale', {
        duration: 2500,
        scale: 0.8,
        reset: true
    });
});
