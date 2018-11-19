$(function () {
	
    $(".open").show();
    $(".box").hide();
    $(".close").bind("click", function () {
        $(".box").hide(100);
        $(".opn").hide();
        $(".imgx").hide();
        if ($(this).attr("class") === "close")
        {
            $(".open").show();
        }
    });
});


$(".open").bind("dblclick", function () {
    $(".box").show(120);
    $(".opn").show();
    $(".imgx").show();
    if ($(this).attr("class") === "open")
    {
        $(".open").show();
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

$(".opn").hide();
$(".imgx").hide();
$(".min").click(function() {
    if ($(this).html() == "-") {
    }
else{
        $(".box").slideToggle(50);
    }
    {
        $(".open").show();
        $(".opn").show();
        $(".imgx").show();
    }


});



$(".opn").bind("click", function () {
    $(".box").show(100);
    if ($(this).attr("class") == "opn")
    {
        $(".opn").show();
    }
});


$(".maxx").hide();
$(".max").bind("click", function () {
    $(".maxx").show(10);
    if ($(this).attr("class") == "max")
    {
        $(".max").hide();
    }

    $(".box" ).width($("body").innerWidth()-30);
    $(".box" ).height($("body").innerHeight()-42);
    $(".box").css({"left":"0px","top":"0px"});


    $(".maxx").bind("click", function () {
    $(".max").show(10);
    if ($(this).attr("class") == "maxx")
    {
        $(".maxx").hide();

    }
        $(".box" ).width(674);
        $(".box" ).height(400);

});
});

$( ".box" ).draggable({
    containment: "parent"
});

var containment = $( ".box" ).draggable( "option", "containment","parent", );
$( ".box" ).draggable( "option", "containment", "parent" );

var sourceSwap = function () {
    var $this = $(this);
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
}

$(function() {
    $('img[data-alt-src]').each(function() {
        new Image().src = $(this).data('alt-src');
    }).hover(sourceSwap, sourceSwap);
});
$(".winsst").hide();
$(".dta-alt-o").hide();
$(".dta-alt").bind("click", function () {
    $(".dta-alt-o").show();
    {
        $(".winsst").show();
    }

});
$(".dta-alt-o").bind("click", function () {
    $(".winsst").hide();
    $(".dta-alt-o").hide();
    {
        $(".dta-alt").show();

    }
});

function times() {
    var date = new Date(),
        hour = date.getHours(),
        minute = checkTime(date.getMinutes()),
        ss = checkTime(date.getSeconds());

    function checkTime(i) {
        if( i < 10 ) {
            i = "0" + i;
        }
        return i;
    }

    if ( hour > 12 ) {
        hour = hour - 12;
        if ( hour == 12 ) {
            hour = checkTime(hour);
            document.getElementById("txtc").innerHTML = hour+":"+minute+" AM";
        }
        else {
            hour = checkTime(hour);
            document.getElementById("txtc").innerHTML = hour+":"+minute+" PM";
        }
    }
    else {
        document.getElementById("txtc").innerHTML = hour+":"+minute+" AM";;
    }
    var time = setTimeout(times,1000);
}

// $(".im1g").bind("dblclick", function () {
//     $(".box").show();
//     $(function() {
//         $('img[.im1g]').each(function() {
//             new Image().src = $(this).data('alt-src');
//         }).addBack(sourceSwap, sourceSwap);
//     });
//     {
//         $(".winsst").hide();
//         $(".dta-alt-o").hide();
//
//     }
// });
