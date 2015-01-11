$(function() {
  if ($.browser.msie && $.browser.version.substr(0,1)<7)
  {
	$('li').has('ul').mouseover(function(){
		$(this).children('ul').css('visibility','visible');
		}).mouseout(function(){
		$(this).children('ul').css('visibility','hidden');
		})
  }
});
$(function() {
    $('a').bind('click',function(event){
		var url = $(this).attr("href");
		if(url.slice(0, 1) == "#"){
		  var $anchor = $(this);
		  $('html, body').stop().animate({
			  scrollTop: $($anchor.attr('href')).offset().top
		  }, 1200);
		  event.preventDefault();
		}
    });
});
function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var stickyTrash_div_top = $('#stickyTrash-anchor').offset().top;
  if (window_top > stickyTrash_div_top) {
    $('#stickyTrash').addClass('stick');
  } else {
    $('#stickyTrash').removeClass('stick');
  }

  var stickyClicks_div_top = $('#stickyClicks-anchor').offset().top;
  if (window_top > stickyClicks_div_top) {
    $('#stickyClicks').addClass('stick');
  } else {
    $('#stickyClicks').removeClass('stick');
  }

  var stickyWords_div_top = $('#stickyWords-anchor').offset().top;
  if (window_top > stickyWords_div_top) {
    $('#stickyWords').addClass('stick');
  } else {
    $('#stickyWords').removeClass('stick');
  }

  var stickyCollege_div_top = $('#stickyCollege-anchor').offset().top;
  if (window_top > stickyCollege_div_top) {
    $('#stickyCollege').addClass('stick');
  } else {
    $('#stickyCollege').removeClass('stick');
  }

  var stickyWeblog_div_top = $('#stickyWeblog-anchor').offset().top;
  if (window_top > stickyWeblog_div_top) {
    $('#stickyWeblog').addClass('stick');
  } else {
    $('#stickyWeblog').removeClass('stick');
  }
}
$(function() {
  $(window).scroll(sticky_relocate);
  sticky_relocate();
});

$(function(){
    $(window).bind('load', function() {
        $('.content').each(function() {
            var post = $(this);
			var position = post.position().left - $(window).scrollLeft();
			var pxposition = (position - 173) + 'px';
			document.getElementById("stickyTrash").style.right=pxposition;
			document.getElementById("stickyClicks").style.right=pxposition;
			document.getElementById("stickyWords").style.right=pxposition;
			document.getElementById("stickyCollege").style.right=pxposition;
			document.getElementById("stickyWeblog").style.right=pxposition;
        });
    });
});
$(function(){
    $(window).bind('mouseenter', function() {
        $('.content').each(function() {
            var post = $(this);
			var position = post.position().left - $(window).scrollLeft();
			var pxposition = (position - 173) + 'px';
			document.getElementById("stickyTrash").style.right=pxposition;
			document.getElementById("stickyClicks").style.right=pxposition;
			document.getElementById("stickyWords").style.right=pxposition;
			document.getElementById("stickyCollege").style.right=pxposition;
			document.getElementById("stickyWeblog").style.right=pxposition;
        });
    });
});

$(function(){
    $(window).bind('load', function() {
        $('.content').each(function() {
            var post = $(this);
			var height = post.height();
			var pxheight = height + 'px';
            /*post.text( pxheight );*/
			var elem = document.getElementById("sidebar1in");
			elem.style.paddingBottom=pxheight;
        });
    });
});
$(function(){
    $(window).bind('mouseenter', function() {
        $('.content').each(function() {
            var post = $(this);
			var height = post.height();
			var pxheight = height + 'px';
            /*post.text( pxheight );*/
			var elem = document.getElementById("sidebar1in");
			elem.style.paddingBottom=pxheight;
        });
    });
});

$(function(){
    $(window).bind('load', function() {
        $('.sidebar1').each(function() {
            var post = $(this);
			var leftdist = post.position().left - $(window).scrollLeft() - 15;
			var pxleftdist = leftdist + 'px';
            /*post.text( leftdist );*/
			var elem = document.getElementById("menu");
			elem.style.left=pxleftdist;
        });
    });
});
$(function(){
    $(window).bind('mouseenter', function() {
        $('.sidebar1').each(function() {
            var post = $(this);
			var leftdist = post.position().left - $(window).scrollLeft() - 15;
			var pxleftdist = leftdist + 'px';
            /*post.text( leftdist );*/
			var elem = document.getElementById("menu");
			elem.style.left=pxleftdist;
        });
    });
});

/*contact popup begin =====================================*/
var popupStatus = 0;
function loadPopup(){
	if(popupStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
	$("#backgroundPopup").fadeIn("slow");
	$("#popupContact").fadeIn("slow");
	popupStatus = 1;
	}
}

function disablePopup(){
  if(popupStatus==1){
	$("#backgroundPopup").fadeOut("slow");
	$("#popupContact").fadeOut("slow");
	popupStatus = 0;
  }
};

function centerPopup(){
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var popupHeight = $("#popupContact").height();
  var popupWidth = $("#popupContact").width();

  $("#popupContact").css({
	"position": "fixed",
	"top": (windowHeight/2) - (popupHeight/2),
	"left": (windowWidth/2) - (popupWidth/2)
  });

  //only need force for IE6
  $("#backgroundPopup").css({
	"height": windowHeight
  });
};
/*contact popup end =======================================*/

/*picture screen popup begin ==============================*/
var picpopupStatus1 = 0;
function loadPicPopup1(){
	if(picpopupStatus1==0){
		$("#picBackgroundPopup").css({
			"opacity": "0.7"
		});
	$("#picBackgroundPopup").fadeIn("slow");
	$("#picPopup1").fadeIn("slow");
	picpopupStatus1 = 1;
	}
}

function disablePicPopup1(){
  if(picpopupStatus1==1){
	$("#picBackgroundPopup").fadeOut("slow");
	$("#picPopup1").fadeOut("slow");
	picpopupStatus1 = 0;
  }
};

function centerPicPopup1(){
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var popupHeight = $("#picPopup1").height();
  var popupWidth = $("#picPopup1").width();

  $("#picPopup1").css({
	"position": "fixed",
	"top": (windowHeight/2) - (popupHeight/2),
	"left": ((windowWidth - 20)/2) - (popupWidth/2)
  });

  //only need force for IE6
  $("#picBackgroundPopup").css({
	"height": windowHeight
  });
};

/*------*/

$(document).ready(function(){
  $("#picButton1").click(function(){
	centerPicPopup1();
	loadPicPopup1();
  });
});

$(document).ready(function(){
  $("#picBackgroundPopup").click(function(){
	disablePicPopup1();
  });
});
/*1 ends and 2 begins here*/
var picpopupStatus2 = 0;
function loadPicPopup2(){
	if(picpopupStatus2==0){
		$("#picBackgroundPopup").css({
			"opacity": "0.7"
		});
	$("#picBackgroundPopup").fadeIn("slow");
	$("#picPopup2").fadeIn("slow");
	picpopupStatus2 = 1;
	}
}

function disablePicPopup2(){
  if(picpopupStatus2==1){
	$("#picBackgroundPopup").fadeOut("slow");
	$("#picPopup2").fadeOut("slow");
	picpopupStatus2 = 0;
  }
};

function centerPicPopup2(){
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var popupHeight = $("#picPopup2").height();
  var popupWidth = $("#picPopup2").width();

  $("#picPopup2").css({
	"position": "fixed",
	"top": (windowHeight/2) - (popupHeight/2),
	"left": ((windowWidth - 20)/2) - (popupWidth/2)
  });

  //only need force for IE6
  $("#picBackgroundPopup").css({
	"height": windowHeight
  });
};

/*------*/

$(document).ready(function(){
  $("#picButton2").click(function(){
	centerPicPopup2();
	loadPicPopup2();
  });
});

$(document).ready(function(){
  $("#picBackgroundPopup").click(function(){
	disablePicPopup2();
  });
});
/*picture screen popup end ===============================*/

$(document).ready(function(){
  $("#button").click(function(){
	centerPopup();
	loadPopup();
  });
});
$(document).ready(function(){
  $("#buttonmenu").click(function(){
	centerPopup();
	loadPopup();
  });
});

$(document).ready(function(){
  $("#backgroundPopup").click(function(){
	disablePopup();
  });
});

$(document).ready(function(){
  $("#cross").click(function(){
	disablePopup();
  });
});

$(function(){
    $('#button').bind('mouseenter', function() {
			var elem = document.getElementById("button");
			elem.style.color="#999";
    });
});
$(function(){
    $('#button').bind('mouseleave', function() {
			var elem = document.getElementById("button");
			elem.style.color="#FFF";
    });
});
