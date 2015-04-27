$('.homesBox').click(function() {
    $('body').addClass('show-modal');
    $('.modal .content').append($(this).html());

    $('.thumbPic').click(function() {
      var imageSource = $(this).attr('src');
      $('.modal').find('.mainPic').attr('src', imageSource);
	});
});

$('.closeButton').click(function() {
    $('.modal .content').empty();
    $('body').removeClass('show-modal');
});