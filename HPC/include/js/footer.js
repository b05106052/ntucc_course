var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

if(filename !== 'index.html'){
  $('#Footer').append(`<div style="text-align: center">
			<a href="./registration.html" class="button btn_1">立即前往報名</a>
	</div>`)
}

$('#Footer').append(`<div class="footer text-center">
    <p>© 2018 National Taiwan University 國立臺灣大學計算機及資訊網路中心. All Rights Reserved. </p><br><br>
</div>`)

$(document).ready(function(){
  // Add smooth scrolling on all links inside the navbar
  $("#navbar-example3 a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});
