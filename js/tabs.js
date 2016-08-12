$(document).ready(function () {
    /**
     * Переключаем вкладку
     */
    $('.tabs ul:first li').click(function () {
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tabs .tabs-content ul:last li').eq($(this).index()).addClass('active');
    });
    /**
     * При загрузки показываем контент активной вкладки
     */
    $('.tabs .tabs-content ul:last li').eq($('.tabs .tabs-content ul:first li.active').index()).addClass('active');
})