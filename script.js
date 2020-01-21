$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
    });
    
    //applies colour red to paragraphs when clicked on 
    $("p").click(function(){
        $("p").css('color', 'red');
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
}); 
