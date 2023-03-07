const myCarouselElement = document.querySelector('#telepites')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: true
})

$(document).ready(function() {
    $('.change-color').on('click', function() {
        var colorClass = $(this).attr('class').split(' ')[1].replace("btn-", "bg-");
        $('#color-box').removeClass().addClass('w-100 m-3 ' + colorClass);
    });
});