$(document).ready(function() {
 
    // highlights respective stream cards after nav link was clicked

 	$(".stream_nav").click(function() {

    var allStreamsCardsSelector = ".card";
    var thisStreamCardsSelector = "." + this.id + "-card";
 
    $(allStreamsCardsSelector).removeClass("highlight_stream");
    $(thisStreamCardsSelector).addClass("highlight_stream");
    });
    
    //applies colour red to paragraphs when clicked on and links turn yellow
    $("p").click(function(){
        $(this).css('color', 'red');
        $(this).children('a').css('background-color','yellow');
    });

    //will add lightblue to h2 elements
    $("h2").hover(function(){
        $("h2").css('background-color', 'lightblue'); 
    });

    /*
    this will apply larger font size to the active h2 element 
    by adding the inline attribute font-size=2em to the particular header
    while switching back all other to 1em. 
    */
    $("#hr_html").hover(function(){
        $("#hr_mysql").css('font-size', '1em');
        $("#hr_python").css('font-size', '1em');
        $("#hr_jquery").css('font-size', '1em');
        $("#hr_django").css('font-size', '1em');
        $("#hr_css").css('font-size', '1em');
        $("#hr_html").css('font-size', '2em');
    });

    $("#hr_mysql").hover(function(){
        $("#hr_mysql").css('font-size', '2em');
        $("#hr_python").css('font-size', '1em');
        $("#hr_jquery").css('font-size', '1em');
        $("#hr_django").css('font-size', '1em');
        $("#hr_css").css('font-size', '1em');
        $("#hr_html").css('font-size', '1em');
    });

    $("#hr_python").hover(function(){
        $("#hr_mysql").css('font-size', '1em');
        $("#hr_python").css('font-size', '2em');
        $("#hr_jquery").css('font-size', '1em');
        $("#hr_django").css('font-size', '1em');
        $("#hr_css").css('font-size', '1em');
        $("#hr_html").css('font-size', '1em');
    });

    $("#hr_jquery").hover(function(){
        $("#hr_mysql").css('font-size', '1em');
        $("#hr_python").css('font-size', '1em');
        $("#hr_jquery").css('font-size', '2em');
        $("#hr_django").css('font-size', '1em');
        $("#hr_css").css('font-size', '1em');
        $("#hr_html").css('font-size', '1em');
    });

    $("#hr_django").hover(function(){
        $("#hr_mysql").css('font-size', '1em');
        $("#hr_python").css('font-size', '1em');
        $("#hr_jquery").css('font-size', '1em');
        $("#hr_django").css('font-size', '2em');
        $("#hr_css").css('font-size', '1em');
        $("#hr_html").css('font-size', '1em');
    });

    $("#hr_css").hover(function(){
        $("#hr_mysql").css('font-size', '1em');
        $("#hr_python").css('font-size', '1em');
        $("#hr_jquery").css('font-size', '1em');
        $("#hr_django").css('font-size', '1em');
        $("#hr_css").css('font-size', '2em');
        $("#hr_html").css('font-size', '1em');
    });

    //applies colour black to body background when mouse enters over buttons
    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });

    //applies colour grey to body background when mouse leaves buttons
    $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee"); 
    });

    //makes the button dissapear when clicked
    $("#button_effect1").click(function(){
        $('#button_effect1').hide('slow');
    });
    
    //makes the text above dissapear when clicked and appear if clicked again (toggle function)
    $('#button_effect2').click(function(){
        $('#pa_effect2').toggle(1000);
    });

    //now using traversing horizontally given the sibling relationship between p and button
    $('#button_effect3').click(function(){
        $(this).prev().slideToggle('slow');
    });

    //fades the button to 0.5 opacity when mouse enters the button area
    $('#button_effect4').mouseenter(function(){
        $('#button_effect4').fadeTo(1000,0.5);
    });

    $('#button_effect4').mouseleave(function(){
        $('#button_effect4').fadeTo(1000,1.0);
    });
    
    // adding effects by chaining methods
    $("#button_effect5").mouseenter(function(){
        $('#button_effect5').removeClass("makeRed").addClass("makeBorder");
    });

    $("#button_effect5").mouseleave(function(){
        $("#button_effect5").removeClass("makeBorder").addClass("makeRed");
    });

    // click function acts on all paragraphs on the page (keyword 'this' was not introduced yet)
    $("#button_effect6").click(function() {
	    $("p").hide(2000).show(2000);
	});

	$("#button_effect6").click(function(){
	    $("p").fadeIn().fadeOut();
	});

    // displays paragraphs after images are clicked

    $('.card_image').click(function(){
        $(this).next().children('p').slideDown();
    });

    // when a card is clicked, background color is changed to pink

    $('.card').click(function() {
        $(this).toggleClass('makePink'); 
    });

    // selects those card with pink background
    $('.select_nav').click(function(){
        $(".card:not(.makePink)").hide();
    });

    // makes all cards appear again

    $('.all_nav').click(function(){
        $('.card').show();
    });
}); 
