$('.carousel').carousel({
    interval: false
})

$(document).ready(function () {               // on document ready
    checkitem();
});

$('#carouselExampleControls').on('slid.bs.carousel', checkitem);
function checkitem()                        // check function
{
    var $this = $('#carouselExampleControls');
    if ($('.carousel-inner .carousel-item:first').hasClass('active')) {
        // Hide left arrow
        $this.children('.carousel-control-prev').hide();
        // But show right arrow
        $this.children('.carousel-control-next').show();
    } else if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
        // Hide right arrow
        $this.children('.carousel-control-next').hide();
        // But show left arrow
        $this.children('.carousel-control-prev').show();
    } else {
        // show right arrow
        $this.children('.carousel-control-next').show();
        // But show left arrow
        $this.children('.carousel-control-prev').show();
    }
}


function validate(){
    var username = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    window.location = "html/main.html"; // Redirecting to other page.
    return false;
}

$(document).keypress(function(e) {
    if(e.which == 13 && $('.carousel-inner .carousel-item:last').hasClass('active')) {
        validate.call($('#loginForm'))
    }

});
