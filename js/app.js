
lightbox.option({
  alwaysShowNavOnTouchDevices :	true,
  showImageNumberLabel : false,
  imageFadeDuration : 450,
  maxWidth : 1200,
  maxHeight : 750,
  positionFromTop: 150,
  fadeDuration : 350
});

$(document).ready(function() {
	$('#search').hideseek({
    attribute: 'data-title',
    nodata: 'Sorry, no results matching your search.',
    min_chars: 2
  });
});
