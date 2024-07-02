var swiper = new Swiper('.mySwiper', {
    slidesPerView: 2, // Quantidade de slides visíveis por vez (calculado automaticamente)
    spaceBetween: 40, // Espaço entre os slides
    loop: true, // Loop infinito
    speed: 2000, // Velocidade da transição em milissegundos (0.8 segundos neste exemplo)
    autoplay: {
        delay: 0, // Delay entre cada rolagem automática em milissegundos (2 segundos neste exemplo)
        disableOnInteraction: false, // Não pausa o autoplay quando o usuário interage com o slider
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 5,
        },
    }
});
