export default Ember.Handlebars.makeBoundHelper(function(item){
  if (!item.get('imageUrl')) return;

  var imageUrls = item.get('imageUrl').split('|');
  var imageStyle = (item.get('imageStyle') || '').split('|');
  var imageHtml = '';
  var i;
  var style;
  if (imageStyle.length > imageUrls.length) {
    imageHtml += '<div class="image-container" style="' + imageStyle[imageUrls.length] + '">';
  } else {
    imageHtml += '<div class="image-container">';
  }
  for (i = 0; i < imageUrls.length; i++){
    style = null;
    if (imageStyle.length) {
      style = imageStyle[i];
    }
    if (style && style !== '*') {
      imageHtml += '<img style="' + style + '" class="scratch-img-step" src="' + imageUrls[i] + '" alt="' + item.get('title') + ' (step ' + i + ')"/>';
    } else {
      imageHtml += '<img class="scratch-img-step" src="' + imageUrls[i] + '" alt="' + item.get('title') + ' (step ' + i + ')"/>';
    }
    imageHtml += '</div>';
  }
  return new Ember.Handlebars.SafeString(imageHtml);
});
