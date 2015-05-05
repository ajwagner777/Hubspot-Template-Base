$(document).ready(function(){
// ====================================
// Off Canvas Nav
// ====================================
	function toggleOffCanvas(){
		$('.off-canvas,.off-canvas-overlay,body').toggleClass('off-canvas-expanded');
	}

	$('.off-canvas-toggle,.off-canvas-overlay,.off-canvas ul li a').click(function(){
		toggleOffCanvas();
	});
});