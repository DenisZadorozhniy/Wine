$(function () {
	//script for popups
	$('a.show_popup').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('a.close').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});
		//поиск
	$('a.search').click(function () {
		$('form.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		$('.menu_wine').show().css({'visibility':'hidden'});
		return false;				
	});	
	$('a.close_search').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		$('.menu_wine').show().css({'visibility':'visible'});
		return false;
	});
	
	//script for popups
	$('a.basket_block').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		$('.basket').show().css({'background' : '#008500'});
		$('.basket_orders').show().css({'background' : '#AF0E26'});
		return false;				
	});	
	
	//Закрыть корзину
	$(document).click( function(event){
	if( $(event.target).closest(".open_basket").length ) 
	return;
	$(".open_basket").slideUp("slow");
	event.stopPropagation();
});
$('.hide').click( function() {
		$(this).siblings(".open_basket").slideToggle("slow");
		return false;
	});
	//слайдер
	$(window).load(function() {
			$('.flexslider').flexslider();
		});
	
	
	// табы и гугл
	        (function($){				
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);				
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });				
        };		
        return this.each(createTabs);
    };	
})(jQuery);
$(document).ready(function(){
    $(".tabs").lightTabs();
});
 //гугл карта
      // initMap() - функция инициализации карты
function initMap() {
    // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
    var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);
 
    // Обязательные опции с которыми будет проинициализированна карта
    var mapOptions = {
        center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
        zoom: 8               // Зум по умолчанию. Возможные значения от 0 до 21
    };
 
    // Создаем карту внутри элемента #map
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
 
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);
	
});	



 
