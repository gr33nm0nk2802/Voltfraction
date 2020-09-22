	$('.navbar-nav>li>a').on('click', function(){
			$('.navbar-collapse').collapse('hide');
	});

		$('#carouselExampleIndicators').carousel({
			interval: 10000000			
		});

		var mq1 = window.matchMedia( "(max-width: 500px)" );
		var mq2 = window.matchMedia( "(max-width: 700px)" );
		var mq3 = window.matchMedia( "(max-width: 992px)" );
		var mq4 = window.matchMedia( "(max-width: 2000px)" );

		if(mq2.matches){

		}else if( mq3.matches){

			$('.games .carousel .carousel-item').each(function(){

			var minPerSlide = 1;
			var $this = $(this);
			var next = $(this).next();
			if (!next.length) {
			next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));

			for (var i=0;i<minPerSlide;i++) {
				next=next.next();
				if (!next.length) {
					next = $(this).siblings(':first');
					}
				
				next.children(':first-child').clone().appendTo($(this));
				}
				
			});

		}else if ( mq4.matches){
			$('#games .carousel .carousel-item').each(function(){

			var minPerSlide = 2;
			var $this = $(this);
			var next = $(this).next();
			if (!next.length) {
			next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));

			for (var i=0;i<minPerSlide;i++) {
				next=next.next();
				if (!next.length) {
					next = $(this).siblings(':first');
					}
				
				next.children(':first-child').clone().appendTo($(this));
				}
				
			});

		}

			if ( $(window).width() > 992) {      
				var checkitem = function() {
				var $this;
				$this = $("#recipeCarousel");
				currentIndex = $('#recipeCarousel .carousel-inner .carousel-item.active').index() + 1;
				
				if ($("#recipeCarousel .carousel-inner .carousel-item:first").hasClass("active")) {
					$this.children(".carousel-control-prev").hide();
					$this.children(".carousel-control-next").show();
				}
				else if(currentIndex===6){
					$this.children(".carousel-control-prev").show();
					$this.children(".carousel-control-next").hide();
				}
				else{
					$this.children(".carousel-control-prev").show();
					$this.children(".carousel-control-next").show();
				}
				};
			checkitem();
			$("#recipeCarousel").on("slid.bs.carousel", "", checkitem);
			} 
			else if ( $(window).width() > 768){
				var checkitem = function() {
				var $this;
				$this = $("#recipeCarousel");
				currentIndex = $('#recipeCarousel .carousel-inner .carousel-item.active').index() + 1;
				
				if ($("#recipeCarousel .carousel-inner .carousel-item:first").hasClass("active")) {
					$this.children(".carousel-control-prev").hide();
					$this.children(".carousel-control-next").show();
				}
				else if(currentIndex===7){
					$this.children(".carousel-control-prev").show();
					$this.children(".carousel-control-next").hide();
				}
				else{
					$this.children(".carousel-control-prev").show();
					$this.children(".carousel-control-next").show();
				}
				};
				checkitem();
				$("#recipeCarousel").on("slid.bs.carousel", "", checkitem);
			}
			else{
				var checkitem = function() {
				var $this;
				$this = $("#recipeCarousel");
				currentIndex = $('#recipeCarousel .carousel-inner .carousel-item.active').index() + 1;
				
				if ($("#recipeCarousel .carousel-inner .carousel-item:first").hasClass("active")) {
					$this.children(".carousel-control-prev").hide();
					$this.children(".carousel-control-next").show();
				}
				else if(currentIndex===9){
					$this.children(".carousel-control-prev").show();
					$this.children(".carousel-control-next").hide();
				}
				else{
					$this.children(".carousel-control-prev").show();
					$this.children(".carousel-control-next").show();
				}
				};
			checkitem();
			$("#recipeCarousel").on("slid.bs.carousel", "", checkitem);
			}
			var checkitem = function() {
				var $this;
				$this = $("#recipeCarousel1");
				currentIndex = $('#recipeCarousel1 .carousel-inner .carousel-item.active').index() + 1;
				
				if ($("#recipeCarousel1 .carousel-inner .carousel-item:first").hasClass("active")) {
					$this.children(".carousel-control-prev").hide();
					$this.children(".carousel-control-next").show();
				}
				else if($("#recipeCarousel1 .carousel-inner .carousel-item:last").hasClass("active")){
					$this.children(".carousel-control-prev").show();
					$this.children(".carousel-control-next").hide();
				}
				else{
					$this.children(".carousel-control-prev").show();
					$this.children(".carousel-control-next").show();
				}
				};
			checkitem();

			$("#recipeCarousel1").on("slid.bs.carousel", "", checkitem);
			if ( $(window).width() > 992) {      
				var checkitem = function() {
				var $this;
				$this = $("#recipeCarousel1");
				currentIndex = $('#recipeCarousel1 .carousel-inner .carousel-item.active').index() + 1;
				
				if ($("#recipeCarousel1 .carousel-inner .carousel-item:first").hasClass("active")) {
					$this.children(".carousel-control-prev").hide();
					$this.children(".carousel-control-next").show();
				}
				else if(currentIndex==17){
					$this.children(".carousel-control-prev").show();
					$this.children(".carousel-control-next").hide();
				}
				else{
					$this.children(".carousel-control-prev").show();
					$this.children(".carousel-control-next").show();
				}
				};
			checkitem();
			$("#recipeCarousel1").on("slid.bs.carousel", "", checkitem);	
			} 	