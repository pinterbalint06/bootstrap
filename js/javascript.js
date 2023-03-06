const myCarouselElement = document.querySelector('#telepites')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: true
})

$(document).ready(function() {
    // Handle button click events
    $('.change-color').on('click', function() {
        var colorClass = $(this).attr('class').split(' ')[1].replace("btn-", "");
        $('.color-box').removeClass().addClass('color-box w-100 m-3 bg-' + colorClass);
    });
});