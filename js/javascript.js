function everyResize() {
  $("#onlinetelepites").css("height", $("#offlinetelepites").height().toString() + "px");
  $(".logo").css("height", $("#telepitescim").css('font-size'));
  $("#progressbarwidth").css("width", $("#wrapperforwidth").width().toString() + "px");
  $('#meretezheto').css("min-width", ($('#meretezhetoparent').width() * 0.3).toString() + "px");
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
      prevContent.addClass('d-none');
      prevContent.removeClass('kicsuszas');
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

  // EGYEDI MEGJELENITESU DOLGOK GOMBJAI

  $(".table-buttons").change(function () {
    if ($(this).attr("name") == "tableSzinek") {  // TABLAS RESZ ITT KEZDODIK
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
      $("#tableTeszt").toggleClass($(this).attr("value"));
    } else if ($(this).attr("name") == "kepekMeret") { // KEPES RESZ ITT KEZDODIK
      $('[kepekegyszerudisable]').attr("disabled", true);

      if ($("#kepTeszt").hasClass("w-50")) {
        $("#kepTeszt").toggleClass("w-100 w-50", 800);
        setTimeout(() => {
          $("#kepTeszt").toggleClass("w-100 img-fluid");
        }, 800);
      } else {
        $("#kepTeszt").toggleClass("img-fluid w-100");
        $("#kepTeszt").toggleClass("w-100 w-50", 800);
      }

      setTimeout(() => {
        $('[kepekegyszerudisable]').removeAttr("disabled");
      }, 800);
    } else if ($(this).attr("name") == "kepekKerekites") {
      $('[kepekegyszerudisable]').attr("disabled", true);

      if ($(this).attr("value") == "rounded" || $(this).attr("value") == "rounded-circle") {
        if ($("#kepTeszt").hasClass("rounded") || $("#kepTeszt").hasClass("rounded-circle")) {
          $("#kepTeszt").toggleClass("rounded rounded-circle", 800);
        } else {
          $("#kepTeszt").addClass($(this).attr("value"));
        }
      } else {
        $('[kepekegyszerudisable]').attr("disabled", true);
        $("#kepTeszt").removeClass("rounded");
        $("#kepTeszt").removeClass("rounded-circle");
      }

      setTimeout(() => {
        $('[kepekegyszerudisable]').removeAttr("disabled");
      }, 800);
    } else if ($(this).attr("name") == "kepekPosition") {
      $('[kepekegyszerudisable]').attr("disabled", true);

      if ($("#kepTeszt").hasClass('w-50')) {
        if ($("#kepTeszt").hasClass('mx-auto d-block')) {
          $("#kepTeszt").addClass("balra-animation");
        } else {
          $("#kepTeszt").addClass("kozepre-animation");
        }
        setTimeout(() => {
          $("#kepTeszt").toggleClass('mx-auto d-block');
          $("#kepTeszt").removeClass("kozepre-animation");
          $("#kepTeszt").removeClass("balra-animation");
        }, 800);
      } else {
        $("#kepTeszt").toggleClass('mx-auto d-block');
      }

      setTimeout(() => {
        $('[kepekegyszerudisable]').removeAttr("disabled");
      }, 800);
    } else if ($(this).attr("name") == "kepekSzegely") {
      $('[kepekegyszerudisable]').attr("disabled", true);
      $("#kepTeszt").toggleClass('img-thumbnail');
      setTimeout(() => {
        $('[kepekegyszerudisable]').removeAttr("disabled");
      }, 800);
    } else if ($(this).attr("name") == "gombokMeret") { // GOMBOS RESZ ITT KEZDODIK
      if ($(this).attr("value") == "alapGombMeret") {
        $('.change-color').removeClass("btn-sm btn-lg");
      } else {
        if ($('.change-color').hasClass("btn-lg") || $('.change-color').hasClass("btn-sm")) {
          $('.change-color').toggleClass("btn-sm btn-lg");
        } else {
          $('.change-color').addClass($(this).attr("value"));
        }
      }
    } else if ($(this).attr("name") == "gombokDisable") {
      $('.change-color').toggleClass("disabled");
    } else if ($(this).attr("name") == "gombokOutline") {
      $('.change-color').each(function () {
        var currBaseColor = $(this).attr("class").split(" ").filter(item => item.startsWith('btn-') && item !== 'btn-sm' && item !== 'btn-lg')[0].split("-");
        var currColor = currBaseColor[currBaseColor.length - 1];
        if (currColor == "dark") {
          $(this).toggleClass("text-white");
        }
        $(this).toggleClass("btn-" + currColor + " btn-outline-" + currColor);
      });
      if ($(this).is(":checked")) {
        $("#kifinomultszinek").attr("disabled", true);
      } else {
        $("#kifinomultszinek").removeAttr("disabled");
      }
    } else if ($(this).attr("name") == "subtle") {
      if ($(this).is(":checked")) {
        $("#btnoutline").attr("disabled", true);
        $('.change-color').each(function () {
          var currBaseColor = $(this).attr("class").split(" ").filter(item => item.startsWith('btn-') && item !== 'btn-sm' && item !== 'btn-lg')[0].split("-");
          var currColor = currBaseColor[currBaseColor.length - 1];
          $(this).text(currColor.charAt(0).toUpperCase() + currColor.slice(1) + " Subtle");
          if (currColor == "warning" || currColor == "info" || currColor == "light") {
            $(this).addClass("text-white");
          }
          $(this).addClass("bg-" + currColor + "-subtle");
        });
      } else {
        $("#btnoutline").removeAttr("disabled");
        $('.change-color').each(function () {
          var currBaseColor = $(this).attr("class").split(" ").filter(item => item.startsWith('btn-') && item !== 'btn-sm' && item !== 'btn-lg')[0].split("-");
          var currColor = currBaseColor[currBaseColor.length - 1];
          $(this).text(currColor.charAt(0).toUpperCase() + currColor.slice(1));
          $(this).removeClass("bg-" + currColor + "-subtle");
          $(this).removeClass("text-white");
        });
      }
    }
  });

  // SZINVALTOZTATO KERET GOMBJAI

  $('.change-color').on('click', function () {
    var currBaseColor = $(this).attr("class").split(" ").filter(item => item.startsWith('btn-') && item !== 'btn-sm' && item !== 'btn-lg')[0].split("-");
    var currColor = currBaseColor[currBaseColor.length - 1];
    if ($("#kifinomultszinek").is(":checked")) {
      var colorClass = "bg-" + currColor + "-subtle";
    } else {
      var colorClass = "bg-" + currColor;
    }
    $('#szinvalto').addClass('bg-transition').animate({}, 3000, function () {
      var classok = $('#szinvalto').attr('class').split(' ');
      $('#szinvalto').removeClass(classok[classok.length - 2] + " bg-transition").addClass(colorClass);
    });
  });

  // COLOK MUTATÁSA

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