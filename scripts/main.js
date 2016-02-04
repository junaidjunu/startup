$(document).ready(function() {
    $('.nav li').hover(function() {
        $(this).find('ul').stop().slideToggle(200);
    });
    $('.open-menu').click(function(e) {
        $('.nav').slideToggle();
        e.preventDefault();
    });
    var currurl = window.location.pathname;
    var index = currurl.lastIndexOf("/") + 1;
    var page = currurl.substr(index);
    $('.nav').find('li').each(function() {
        var href = $(this).find('a').attr('href');
        if (page == href) {
            $(this).addClass('active');
        }
    });
});