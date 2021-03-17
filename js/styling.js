// Hide navigation bar on click outside

$(document).mouseup(function (e) { 
    if ($(e.target).closest(".menu-toggle").length === 0) { 

        if ($('.main-navigation').is(':visible'))
        $(".menu-toggle").click(); 
    } 
}); 

// Hide navigation bar on click outside


// $(document).ready(function() {
//     $("#navbar_top").hide(); //hide your div initially
//     var topOfOthDiv = $("#about").offset().top;
//     $(window).scroll(function() {
//         if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
//             $("#navbar_top").show(600); //reached the desired point -- show div
//         }
//     });
// });






// $(document).ready(function() {
//     // $("#nav_hide").hide(); //hide your div initially
//     var topOfOthDiv = $("#about").offset().top;
//     $(window).scroll(function() {
//         if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
//             $("#nav_hide").hide(600); //reached the desired point -- show div
//         }
//     });
// });


   $(window).scroll(function() {
    var topOfOthDiv = $("#intro").offset().top;
    if($(window).scrollTop() > topOfOthDiv) 
     {
        $('.a').hide(600);
     }
    else
     {
            $('.a').show(600);     
     }
 });



 $(document).ready(function() {
    $("#navbar_top").hide(); 
});



   $(window).scroll(function() {
    var topOfOthDiv = $("#about").offset().top;
    if($(window).scrollTop() > topOfOthDiv) 
     {
        $('#navbar_top').show(600);
     }
     else
     {
        $('#navbar_top').hide(600);
     
     }
 });

