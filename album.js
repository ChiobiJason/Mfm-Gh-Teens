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