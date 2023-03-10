function everyResize() {
  $(".logo").css("height", $("#telepites").css('font-size'));
  $("#progressbarwidth").css("width", $("#wrapperforwidth").width());
  $('#meretezheto').css("min-width", $('#meretezhetoparent').width() * 0.3);
  var meretezhetoRatio = $('#meretezheto').width() / $('#meretezhetoparent').width();
  if (meretezhetoRatio > 0.5 && meretezhetoRatio <= 0.75) {
    $('#meretezheto').children().each(function () {
      $('#meretezheto div:eq(0)').css("width", "50%");
      $('#meretezheto div:eq(1)').css("width", "50%");
      $('#meretezheto div:eq(2)').css("width", "100%");
    });
  } else if (meretezhetoRatio <= 0.5) {
    $('#meretezheto').children().each(function () {
      $(this).css("width", "100%");
    });
  } else {
    $('#meretezheto').children().each(function () {
      $(this).css("width", (100 / 3).toString() + "%");
    });
  }
}

$(document).ready(function () {
  Prism.highlightAll();
  window.onresize = function () {
    everyResize();
  }

  everyResize();

  $('#meretezheto').resizable({
    handles: {
      'e': '#meretezokar'
    },
    containment: "#meretezhetoparent",
    resize: function (event, ui) {
      $('#meretezheto').css("height", "auto");
    }
  });

  $('.change-color').on('click', function () {
    var colorClass = $(this).attr('class').split(' ')[1].replace("btn-", "bg-");
    $('#szinvalto').addClass('bg-transition').animate({}, 3000, function () {
      $('#szinvalto').removeClass($('#szinvalto').attr('class').split(' ')[2] + " bg-transition").addClass(colorClass);
    });
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