function meretezhetoRatioSzamolas() {
  var meretezhetoRatio = $('#meretezheto').width() / $('#meretezhetoparent').width();
  if (meretezhetoRatio < 0.65) {
    $('#meretezheto').children().each(function() {
      $(this).css("width", "100%");
    });
  } else {
    $('#meretezheto').children().each(function() {
      $(this).css("width", "calc(100% / 3)");
    });
  }
}

$(document).ready(function () {
  window.onresize = function () {
    meretezhetoRatioSzamolas();
  }
  
  meretezhetoRatioSzamolas();

  $('#meretezheto').resizable({
    handles: {
      'e': '#meretezokar'
    }
  });

  $('.change-color').on('click', function () {
    var colorClass = $(this).attr('class').split(' ')[1].replace("btn-", "bg-");
    $('#color-box').removeClass().addClass('w-100 m-3 ' + colorClass);
  });

  $("#btn-col-3").click(function () {
    $("#cols").children().slideUp(500, function () {
      $("#cols").empty();
      $("<div class='col-3 bg-danger'></div>").appendTo($("#cols")).hide().slideDown(500);
      $("<div class='col-3 bg-success'></div>").appendTo($("#cols")).hide().slideDown(500);
      $("<div class='col-3 bg-warning'></div>").appendTo($("#cols")).hide().slideDown(500);
      $("<div class='col-3 bg-primary'></div>").appendTo($("#cols")).hide().slideDown(500);
    });
  });

  $("#btn-col-4").click(function () {
    $("#cols").children().slideUp(500, function () {
      $("#cols").empty();
      $("<div class='col-4 bg-danger'></div>").appendTo($("#cols")).hide().slideDown(500);
      $("<div class='col-4 bg-success'></div>").appendTo($("#cols")).hide().slideDown(500);
      $("<div class='col-4 bg-warning'></div>").appendTo($("#cols")).hide().slideDown(500);
    });
  });

  $("#btn-col-6").click(function () {
    $("#cols").children().slideUp(500, function () {
      $("#cols").empty();
      $("<div class='col-6 bg-danger'></div>").appendTo($("#cols")).hide().slideDown(500);
      $("<div class='col-6 bg-success'></div>").appendTo($("#cols")).hide().slideDown(500);
    });
  });

  $("#btn-col-12").click(function () {
    $("#cols").children().slideUp(500, function () {
      $("#cols").empty();
      $("<div class='col-12 bg-danger'></div>").appendTo($("#cols")).hide().slideDown(500);
    });
  });
});