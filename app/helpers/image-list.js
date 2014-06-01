export default Ember.Handlebars.makeBoundHelper(function(itemForRoute, item){
  if (!item.get('imageUrl')) return;
  var containedSnippets = itemForRoute.get('containedSnippets');
  var itemIsContained = containedSnippets.get('length') && containedSnippets.indexOf(item) > -1;
  var imageUrls = item.get('imageUrl').split('|');
  var imageStyle = (item.get('imageStyle') || '').split('|');
  var imageHtml = '';
  var i;
  var style;
  if (imageStyle.length > imageUrls.length) {
    imageHtml += '<div class="image-container ' + (itemIsContained ? 'contained' : '') + '" style="' + imageStyle[imageUrls.length] + '">';
  } else {
    imageHtml += '<div class="image-container ' + (itemIsContained ? 'contained' : '') + '">';
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
