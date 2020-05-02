////////////////////////////////////////////////////////////////////
/*back to the top*/
window.onscroll = function() {
	var previousScroll = 0;
	scrollFunction();
	scrollUpNavbar();
};

function scrollFunction(){
	let scrollTop = $('body,html').scrollTop();
    if ( scrollTop > 500) {
		$("#goToTop").css("display", "block");
    } else {
		$("#goToTop").css("display", "none");
    }
}

function scrollUpNavbar(){
	let currentScroll = $(this).scrollTop();
	if ($(this).width() > 768){
		if (currentScroll > 60 && currentScroll < $(document).height() - $(window).height()){
		if (currentScroll > this.previousScroll){
			$(".navbar").removeClass("is-visible").addClass("is-hidden");
			$(".dropdown-menu").removeClass("is-visible").addClass("is-hidden");
		} else {
			$(".navbar").removeClass("is-hidden").addClass("is-visible");
			$(".dropdown-menu").removeClass("is-hidden").addClass("is-visible");
		}
		this.previousScroll = currentScroll;
		}
	}
  }

/*alway to the top*/
function topFunction(val){
	var valTop = val || 0;
	window.scroll({top: valTop, left: 0, behavior: 'smooth' });
}

/*hamburger menu*/
$(function(){
	//for close, opened dropdown.
	let navMain = $(".navbar-collapse");
	navMain.on("click", "a:not([data-toggle])", null, function () {
		navMain.collapse('hide');
	});
	//for close, click in Brand.
	$(".navbar-brand").click(function(){
		navMain.collapse('hide');
	});
});

/*active navbar*/
$(function(){
	$(".nav-item").click(function()
	{
		$(".nav-item").removeClass("active");
		let $this = $(this);
		if (!$this.hasClass("active"))
		{
			$this.addClass("active");
		}
	});
	$(".navbar-brand").click(function()
	{
		$(".nav-item").removeClass("active");
	});
});


