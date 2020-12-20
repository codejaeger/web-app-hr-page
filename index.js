$(' .owl_1').owlCarousel({
    loop:false,
    margin:2, 
    responsiveClass:true,
    slideSpeed: 400,
    paginationSpeed: 400,
    responsive:{
        0:{
            items:4,
            nav:true,
            loop:false
        },
    }
})

$(document) .ready(function(){
var li =  $(".owl-item li ");
$(".owl-item li").click(function(){
li.removeClass('active');
});
});