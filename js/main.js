$(document).ready(function(){
  $('.skill_one').animate({width:'90%'}, 1000);
  $('.skill_two').animate({width:'70%'}, 1000);
  $('.skill_three').animate({width:'50%'}, 1000);
  $('.skill_four').animate({width:'95%'}, 1000);
  $('.skill_five').animate({width:'80%'}, 1000);
  $('.skill_six').animate({width:'80%'}, 1000);
  $('.skill_seven').animate({width:'60%'}, 1000);
  $('.skill_eight').animate({width:'80%'}, 1000);
  $('.skill_nine').animate({width:'80%'}, 1000);
  $('.skill_ten').animate({width:'50%'}, 1000);
  $('.skill_eleven').animate({width:'50%'}, 1000);
  $('.skill_twelve').animate({width:'60%'}, 1000);
  $('.skill_thirteen').animate({width:'60%'}, 1000);

    
    $('.filter-a').click(function(){
       //hide all works by default 
       $(".work-one").addClass('filter-hide');
       //show slected works based on the menu clicked
       $(".work-one[data-filter='"+$(this).attr('data-filter')+"']").removeClass("filter-hide");
       //remove selected class to the link      
       $('a#filter-a').removeClass('selected');
       //add selected class to the active link
       $(this).addClass('selected');
       return false;
      });
      //show all works for "all" menu
     $('a[data-filter="*"]').click(function(event) {    
        $(".work-one").removeClass('filter-hide');
        return false;
     });
    
    
});

//contact form

function validateForm() {
                 
    var contactName = document.forms["contactform"]["fullname"].value;
    if (contactName == "") {
        document.getElementById("name-error").textContent="Name must be filled out!";
        return false;
    }
    var contactEmail = document.forms["contactform"]["email"].value;
    var atpos = contactEmail.indexOf("@");
    var dotpos = contactEmail.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=contactEmail.length) {
        document.getElementById("email-error").textContent="Email address is not valid!";
        return false;
    } else {
        document.getElementById("contactform").reset();
        document.getElementById("name-error").textContent =" ";
        document.getElementById("email-error").textContent =" ";

        document.getElementById("success-msg").textContent="Your message is on the way. You will here from me soon. Thanks!";
    }
}


// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main-header').addClass('sticky');
    } else {
        $('.main-header').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main-header').hasClass('open-nav')) {
        $('.main-header').removeClass('open-nav');
    } else {
        $('.main-header').addClass('open-nav');
    }
});

$('.main-header li a').click(function() {
    if ($('.main-header').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main-header').removeClass('open-nav');
    }
});

// navigation scroll 
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

