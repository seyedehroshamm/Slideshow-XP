

$(function () {
    $(".box").show();
    $(".close").bind("click", function () {
        $(".txtopn").hide();
        if ($(this).attr("class") == "close")
        {
        }
    });
});

$(".opn").hide();
$(".min").click(function() {
    if ($(this).html() == "-") {
    }
    else{
        $(".box").slideToggle();
    }
    {
        $(".open").show();
        $(".opn").show();
    }

});

$(".opn").bind("click", function () {
    $(".box").show(100);
    if ($(this).attr("class") == "opn")
    {
        $(".opn").hide();

    }
});



//slide show time:
// $(function() {
//     $("#slideshow > div:gt(0)").hide();
//     setInterval(function() {
//         $('#slideshow > div:first')
//             .fadeOut(3000)
//             .next()
//             .fadeIn(3000)
//             .end()
//             .appendTo('#slideshow');
//     },  3000);
// });

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function ig(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("imgws");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
