function everyResize() {
  $("#onlinetelepites").css("height", $("#offlinetelepites").height());
  $(".logo").css("height", $("#telepitescim").css('font-size'));
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
  everyResize();
  window.onresize = function () {
    everyResize();
  }
  Prism.highlightAll();
  $('#changea').find('a').attr("target", "_blank");

  $(".contentchange").click(function () {
    $(".contentchange").attr("disabled", true);
    var nextContent = $("#" + $(this).attr("class").split(' ').pop())
    var prevContent = $('.activecontent');
    prevContent.removeClass('activecontent');
    prevContent.addClass('kicsuszas');

    setTimeout(() => {
      prevContent.removeClass('kicsuszas');
      prevContent.addClass('d-none');
      nextContent.removeClass("d-none");
      nextContent.addClass("becsuszas");
    }, 600);

    setTimeout(() => {
      nextContent.addClass("activecontent");
      nextContent.removeClass("becsuszas");
      $(".contentchange").removeAttr("disabled");
    }, 1200);
  });

  $('#meretezheto').resizable({
    handles: {
      'e': '#meretezokar'
    },
    containment: "#meretezhetoparent",
    resize: function (event, ui) {
      $('#meretezheto').css("height", "auto");
    }
  });

  $("#kifinomultszinek").on("change", function () {
    if ($(this).is(":checked")) {
      $('.change-color').each(function () {
        var currColor = $(this).attr("class").split(" ")[1].split("-")[1];
        $(this).text(currColor.charAt(0).toUpperCase() + currColor.slice(1) + " Subtle");
        if (currColor == "warning" || currColor == "info" || currColor == "light") {
          $(this).addClass("text-white");
        }
        $(this).addClass("bg-" + currColor + "-subtle");
      });
    } else {
      $('.change-color').each(function () {
        var currColor = $(this).attr("class").split(" ")[1].split("-")[1];
        $(this).text(currColor.charAt(0).toUpperCase() + currColor.slice(1));
        $(this).removeClass("bg-" + currColor + "-subtle");
        $(this).removeClass("text-white");
      });
    }
  });

  $(".table-buttons").change(function () {
    if ($(this).attr("name") == "tableSzinek") {
      var valtoztatosokElottiSzin = $("[elozoszin]").attr("elozoszin");
      if ($("[elozoszin]").attr("elozoszin") == "alap") {
        $("#tableTeszt").addClass("table-" + $(this).attr("value"));
        $("[elozoszin]").removeAttr("elozoszin");
        $(this).attr("elozoszin", $(this).attr("value"));
      } else {
        if ($(this).attr("value") == "alap") {
          $("#tableTeszt").removeClass("table-" + $("[elozoszin]").attr("elozoszin"));
        } else {
          $("#tableTeszt").removeClass("table-" + $("[elozoszin]").attr("elozoszin"));
          $("#tableTeszt").addClass("table-" + $(this).attr("value"));
        }
        $("[elozoszin]").removeAttr("elozoszin",);
        $(this).attr("elozoszin", $(this).attr("value"));
      }
      if ($("[elozoszegely]").attr("elozoszegely") == "table-bordered" && $("[elozoszin]").attr("elozoszin") != "alap") {
        if ($("#tableTeszt").hasClass("border-" + valtoztatosokElottiSzin)) {
          $("#tableTeszt").removeClass("border-" + valtoztatosokElottiSzin);
        }
        $("#tableTeszt").addClass("border-" + $("[elozoszin]").attr("elozoszin"));
      } else {
        $("#tableTeszt").removeClass("border-" + valtoztatosokElottiSzin);
      }
    } else if ($(this).attr("name") == "tableCsikozas") {
      if ($("#tableTeszt").hasClass($(this).attr("value"))) {
        $("#tableTeszt").removeClass($(this).attr("value"));
      } else {
        $("#tableTeszt").addClass($(this).attr("value"));
      }
    } else if ($(this).attr("name") == "tableSzegelyezes") {
      if ($("[elozoszegely]").attr("elozoszegely") == "alapSzegely") {
        $("#tableTeszt").addClass($(this).attr("value"));
        $("[elozoszegely]").removeAttr("elozoszegely");
        $(this).attr("elozoszegely", $(this).attr("value"));
      } else {
        if ($(this).attr("value") == "alapSzegely") {
          $("#tableTeszt").removeClass($("[elozoszegely]").attr("elozoszegely"));
        } else {
          $("#tableTeszt").removeClass($("[elozoszegely]").attr("elozoszegely"));
          $("#tableTeszt").addClass($(this).attr("value"));
        }
        $("[elozoszegely]").removeAttr("elozoszegely",);
        $(this).attr("elozoszegely", $(this).attr("value"));
      }
      if ($("[elozoszegely]").attr("elozoszegely") == "table-bordered" && $("[elozoszin]").attr("elozoszin") != "alap") {
        $("#tableTeszt").addClass("border-" + $("[elozoszin]").attr("elozoszin"));
      } else {
        $("#tableTeszt").removeClass("border-" + $("[elozoszin]").attr("elozoszin"));
      }
    } else if ($(this).attr("name") == "tableEgyebek") {
      if ($("#tableTeszt").hasClass($(this).attr("value"))) {
        $("#tableTeszt").removeClass($(this).attr("value"));
      } else {
        $("#tableTeszt").addClass($(this).attr("value"));
      }
    }
  });

  $('.change-color').on('click', function () {
    if ($("#kifinomultszinek").is(":checked")) {
      var colorClass = $(this).attr('class').split(' ')[1].replace("btn-", "bg-") + "-subtle";
    } else {
      var colorClass = $(this).attr('class').split(' ')[1].replace("btn-", "bg-");
    }
    $('#szinvalto').addClass('bg-transition').animate({}, 3000, function () {
      var classok = $('#szinvalto').attr('class').split(' ');
      $('#szinvalto').removeClass(classok[classok.length - 2] + " bg-transition").addClass(colorClass);
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