$('.icon').click(playVideo);

function playVideo() {
  $('.icon').hide();
  $('#vidImage').hide();
  $('iframe').show();
  $('iframe').trigger('click');
}