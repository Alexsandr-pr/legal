

new Swiper (".swiper-container", {
    navigation: {
        nextEl: '.swiper-button-left',
        prevEl: '.swiper-button-right'
    }, 
    breakpoints:{
        "320":{
            slidesPerView: 1,
            centeredSlides: true
        },
    },
    effect: 'cards',
    cardsEffect: {
      // ...
    },
})
