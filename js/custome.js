jQuery(document).ready(function( $ ) {


/*var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

var mixer = mixitup(containerEl, {
    selectors: {
        target: '[data-ref~="mixitup-target"]'
    }
});*/






$('.my-carousel').owlCarousel({
    loop:true,
    nav:true,
    margin:10, 
    items:5,
    dotData:true, 




 responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    } 
})


        
 });
 