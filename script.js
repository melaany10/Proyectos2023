var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides:true, 
    loop:true,
    spaceBetween: 40, /*Separacacion entre cada uno de los cuadros o imagenes*/
    grabCursor:true,
    navigation: {   /*Esto se utilizara para que las flechas tenga una función, la cual sea eslizar las imagenes*/
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    breakpoints : {
        991: {
            slidesPerView: 3
        }
    }
});