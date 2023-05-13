//---------------------------------------------NAVBAR STYLES---------------------------------------------------
$(".brand-logo").on("mouseenter",function(){
    $(".brand-name").removeClass("brand-hide"); 
    $(".brand-logo").addClass("brand-hide");
}).on("mouseleave",function(){
    $(".brand-logo").removeClass("brand-hide"); 
    $(".brand-name").addClass("brand-hide"); 
});

$(".navbar-toggler").on("click",function(){
    $(".main-site,.contact-section,.contact-section-larger").toggleClass("blur");
});
//---------------------------------------------Contacts--------------------------------------------------------
$(".fa-envelope").on("click",function(){
    $("#contact").toggleClass("hide");
    $("#contact-larger").toggleClass("hide");
    $(".navbar").toggleClass("black-navbar");
});
