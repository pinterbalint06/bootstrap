const myCarouselElement = document.querySelector('#telepites')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: true
})

$(document).ready(function () {
  $('.change-color').on('click', function () {
    var colorClass = $(this).attr('class').split(' ')[1].replace("btn-", "bg-");
    $('#color-box').removeClass().addClass('w-100 m-3 ' + colorClass);
  });

  $("#btn-col-3").click(function () {
    $("#cols").children().fadeOut(500, function () {
      $("#cols").empty();
      $("#cols").append($("<div class='col-3 bg-danger'>1</div>"));
      $("#cols").append($("<div class='col-3 bg-success'>2</div>"));
      $("#cols").append($("<div class='col-3 bg-warning'>3</div>"));
      $("#cols").append($("<div class='col-3 bg-primary'>4</div>"));
      $("#cols").children().fadeIn(500);
    });
  });

  $("#btn-col-4").click(function () {
    $("#cols").children().fadeOut(200, function () {
      $("#cols").empty();
      $("#cols").append($("<div class='col-4 bg-danger'>1</div>"));
      $("#cols").append($("<div class='col-4 bg-success'>2</div>"));
      $("#cols").append($("<div class='col-4 bg-warning'>3</div>"));
      $("#cols").children().fadeIn(200);
    });
  });

  $("#btn-col-6").click(function () {
    $("#cols").children().fadeOut(200, function () {
      $("#cols").empty();
      $("#cols").append($("<div class='col-6 bg-danger'>1</div>"));
      $("#cols").append($("<div class='col-6 bg-success'>2</div>"));
      $("#cols").children().hide().fadeIn(200);
    });
  });

  $("#btn-col-12").click(function () {
    $("#cols").children().fadeOut(200, function () {
      $("#cols").empty();
      $("#cols").append($("<div class='col-12 bg-danger'>1</div>"));
      $("#cols").children().hide().fadeIn(200);
    });
  });
});