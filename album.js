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

// Event Listener to show toastify Icon on the click of EDIT button
const editButton = document.querySelectorAll(".edit");
      const numberOfEditButtons = editButton.length;
      for (let i = 0; i < numberOfEditButtons; i++) {
        editButton[i].addEventListener("click", function () {
          Toastify({
            text: "You don't have access",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            style: {
                background: "linear-gradient(to top, #5f72bd 0%, #9b23ea 100%)",
            }
          }).showToast();
        });
}

// Follow Us animation with Typed.js
var typed = new Typed(".followusanimation", {
    strings: ["Follow us"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});