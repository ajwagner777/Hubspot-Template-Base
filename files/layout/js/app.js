$(document).ready(function(){
// ====================================
// Off Canvas Nav
// ====================================
	//Copy the nav to the off canvas container
	$('.off-canvas-wrapper').append($('header nav').html());
	$('.off-canvas-wrapper>ul>li.hs-item-has-children').append('<span class="expand">+</span>');
	$('.expand').click(function(e){
		e.preventDefault();
		var submenu = $(this).parent().find('ul');
		submenu.toggle(300);
		$(this).toggleText('+','\u2013');
	});
	function toggleOffCanvas(){
		$('.off-canvas,.off-canvas-overlay,body').toggleClass('off-canvas-expanded');
	}

	$('.off-canvas-toggle,.off-canvas-overlay,.off-canvas ul li a').click(function(){
		toggleOffCanvas();
	});
});
$.fn.toggleText = function(t1, t2){
  if (this.text() === t1) {this.text(t2);}
  else                    {this.text(t1);}
  return this;
};