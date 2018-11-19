
$(function () {
    $(".open").show();
    $(".box").hide();
    $(".close").bind("click", function () {
        $(".box").hide(100);
        $(".opn").hide();
        $(".txtopn").hide();
        $(".imgx").hide();
        if ($(this).attr("class") == "close")
        {
            $(".open").show();
        }
    });
});

$(".open").bind("dblclick", function () {
    $(".box").show(100);
    $(".opn").show();
    $(".txtopn").show();
    $(".imgx").show();
    if ($(this).attr("class") == "open")
    {
        $(".open").show();
    }
});

$(function() {

    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
        $('#slideshow > div:first')
            .fadeOut(3000)
            .next()
            .fadeIn(3000)
            .end()
            .appendTo('#slideshow');
    },  3000);

});
$(".opn").hide();
$(".txtopn").hide();
$(".imgx").hide();
$(".min").click(function() {
    if ($(this).html() == "-") {
    }
    else{
        $(".box").slideToggle();

    }
    {
        $(".open").show();
        $(".opn").show();
        $(".txtopn").show();
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

$(".dta-alt-o").hide();
$(".dta-alt").bind("click", function () {
    $(".dta-alt-o").show();
});

function times() {
    var date = new Date(),
        hour = date.getHours(),
        minute = checkTime(date.getMinutes()),
        ss = checkTime(date.getSeconds());
