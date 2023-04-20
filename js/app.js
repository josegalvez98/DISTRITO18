$(document).ready(function(){

    $('a').on('click',function(){
        if (this.hash !== ''){
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            })
        }

    })

	$('#burger').click(function() {
        $('#burger').toggleClass('abierto')
        $('.menu').toggleClass('abierto');
    })

    $('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});


	  
})

