export default Ember.Handlebars.makeBoundHelper(function(topicItem){
  if (!topicItem.get('imageUrl')) return;

  var imageUrls = topicItem.get('imageUrl').split('|');
  var imageStyle = (topicItem.get('imageStyle') || '').split('|');
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
      imageHtml += '<img style="' + style + '" class="scratch-img-step" src="' + imageUrls[i] + '" alt="' + topicItem.get('title') + ' (step ' + i + ')"/>';
    } else {
      imageHtml += '<img class="scratch-img-step" src="' + imageUrls[i] + '" alt="' + topicItem.get('title') + ' (step ' + i + ')"/>';
    }
    imageHtml += '</div>';
  }
  return new Ember.Handlebars.SafeString(imageHtml);
});
