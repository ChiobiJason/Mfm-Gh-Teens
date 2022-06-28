// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

// Welcome Animation with Typed.js
var typed = new Typed(".auto-type", {
    strings: ["Welcome", "Akwaaba", "Bo oba!"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

// Slogan Animation with Typed.js
var typed = new Typed(".slogan", {
    strings: ["Raising a Righteous Generation", "Come and be filled with the Holy Spirit."],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

// Follow Us animation with Typed.js
var typed = new Typed(".followusanimation", {
    strings: ["Follow us"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});