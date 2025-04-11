function createSlider(selector) {
  const images = $(selector).find('img');
  var current = 0;

  function showImage(index) {
    images.removeClass('active');
    images.eq(index).addClass('active');
  }

  $(selector).find('.prev').click(function() {
    current = (current - 1 + images.length) % images.length
    showImage(current);
  })

  $(selector).find('.next').click(function() {
    current = (current + 1) % images.length
    showImage(current)
  })
}
