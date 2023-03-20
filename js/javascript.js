/*jshint esversion: 8 */

function everyResize() {
	$("#onlinetelepites").css("height", $("#offlinetelepites").height().toString() + "px");
	$(".logo").css("height", $("#telepitescim").css('font-size'));
	$("#progressbarwidth").css("width", $("#wrapperforwidth").width().toString() + "px");
	// MERETEZHETO ELSO
	$('#meretezheto1').css("min-width", ($('#meretezhetoparent1').width() * 0.3).toString() + "px");
	$('.minimumMinimum1').css("width", ($('#meretezhetoparent1').width() * 0.3).toString() + "px");
	$('.minimum11').css("width", ($('#meretezhetoparent1').width() * 0.2).toString() + "px");
	$('.minimum12').css("width", ($('#meretezhetoparent1').width() * 0.25).toString() + "px");
	$('.minimum13').css("width", ($('#meretezhetoparent1').width() * 0.25).toString() + "px");
	var meretezhetoRatio = $('#meretezheto1').width() / $('#meretezhetoparent1').width();
	if (meretezhetoRatio > 0.5 && meretezhetoRatio <= 0.75) {
		$('#meretezheto1').children().each(function () {
			$('#meretezheto1 div:eq(0)').css("width", "50%");
			$('#meretezheto1 div:eq(1)').css("width", "50%");
			$('#meretezheto1 div:eq(2)').css("width", "100%");
		});
	} else if (meretezhetoRatio <= 0.5) {
		$('#meretezheto1').children().css("width", "100%");
	} else {
		$('#meretezheto1').children().css("width", (100 / 3).toString() + "%");
	}
	// MERETEZHETO MASODIK
	$('#meretezheto2').css("min-width", (($('#meretezhetoparent2').width() * 0.15) + 6).toString() + "px");
	$('#meretezheto2').resizable({
		minWidth: ($('#meretezhetoparent2').width() * 0.15) + 6
	});
	$('.minimumMinimum2').css("width", ($('#meretezhetoparent2').width() * 0.15).toString() + "px");
	$('.minimum2').css("width", ($('#meretezhetoparent2').width() * 0.17).toString() + "px");
	var meretezhetoRatio2 = $('#meretezheto2').width() / $('#meretezhetoparent2').width();
	if (meretezhetoRatio2 > 0.83 && meretezhetoRatio2 <= 1) {
		$('#meretezheto2').children().each(function () {
			$('#meretezheto2').children().css("width", (100 / 6).toString() + "%");
		});
	} else if (meretezhetoRatio2 > 0.66 && meretezhetoRatio2 <= 0.83) {
		$('#meretezheto2').children().css("width", "25%");
	} else if (meretezhetoRatio2 > 0.49 && meretezhetoRatio2 <= 0.66) {
		$('#meretezheto2').children().css("width", (100 / 3).toString() + "%");
	} else if (meretezhetoRatio2 > 0.32 && meretezhetoRatio2 <= 0.49) {
		$('#meretezheto2').children().css("width", "50%");
	} else if (meretezhetoRatio2 <= 0.32) {
		$('#meretezheto2').children().css("width", "100%");
	}
}
$(document).ready(function () {
	var ikonokMutatva = 0;
	var alertAlapContent = "";
	var alertHTML = $("#alertTeszt").prop("outerHTML");
	var ikonokKodHelye = {
		"infoIBetu": 0,
		"pipa": 1,
		"felkialtoJel": 2
	};

	const telepitesCarousel = document.querySelector('#telepites')

	const carousel = new bootstrap.Carousel(telepitesCarousel, {
		interval: 2000,
		touch: true
	})

	var szinek = ["danger", "success", "warning", "primary", "dark", "info"];
	everyResize();
	window.onresize = function () {
		everyResize();
	};
	Prism.highlightAll();
	$("#ikonKodokIde").children().each(function () {
		if ($(this).hasClass("punctuation")) {
			$(this).remove();
		}
	});
	$("#ikonKodokIde").children().each(function () {
		$(this).addClass("d-none");
	});
	$('#changea').find('a').attr("target", "_blank");
	$(".contentchange").click(function () {
		$(".contentchange").attr("disabled", true);
		var nextContent = $("#" + $(this).attr("class").split(' ').pop());
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
	$('#meretezheto1').resizable({
		handles: {
			'e': '#meretezokar1'
		},
		containment: "#meretezhetoparent1",
		resize: function () {
			$('#meretezheto1').css("height", "auto");
		}
	});
	$('#meretezheto2').resizable({
		handles: {
			'e': '#meretezokar2'
		},
		containment: "#meretezhetoparent2",
		resize: function () {
			$('#meretezheto2').css("height", "auto");
		}
	});
	// EGYEDI MEGJELENITESU DOLGOK GOMBJAI
	$(".demo-buttons").change(function () {
		if ($(this).attr("name") == "tableSzinek") { // TABLAS RESZ ITT KEZDODIK
			var valtoztatosokElottiSzin = $("[data-elozoszin]").attr("data-elozoszin");
			if ($("[data-elozoszin]").attr("data-elozoszin") == "alap") {
				$("#tableTeszt").addClass("table-" + $(this).attr("value"));
				$("[data-elozoszin]").removeAttr("data-elozoszin");
				$(this).attr("data-elozoszin", $(this).attr("value"));
			} else {
				if ($(this).attr("value") == "alap") {
					$("#tableTeszt").removeClass("table-" + $("[data-elozoszin]").attr("data-elozoszin"));
				} else {
					$("#tableTeszt").removeClass("table-" + $("[data-elozoszin]").attr("data-elozoszin"));
					$("#tableTeszt").addClass("table-" + $(this).attr("value"));
				}
				$("[data-elozoszin]").removeAttr("data-elozoszin",);
				$(this).attr("data-elozoszin", $(this).attr("value"));
			}
			if ($("[data-elozoszegely]").attr("data-elozoszegely") == "table-bordered" && $("[data-elozoszin]").attr("data-elozoszin") != "alap") {
				if ($("#tableTeszt").hasClass("border-" + valtoztatosokElottiSzin)) {
					$("#tableTeszt").removeClass("border-" + valtoztatosokElottiSzin);
				}
				$("#tableTeszt").addClass("border-" + $("[data-elozoszin]").attr("data-elozoszin"));
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
			if ($("[data-elozoszegely]").attr("data-elozoszegely") == "alapSzegely") {
				$("#tableTeszt").addClass($(this).attr("value"));
				$("[data-elozoszegely]").removeAttr("data-elozoszegely");
				$(this).attr("data-elozoszegely", $(this).attr("value"));
			} else {
				if ($(this).attr("value") == "alapSzegely") {
					$("#tableTeszt").removeClass($("[data-elozoszegely]").attr("data-elozoszegely"));
				} else {
					$("#tableTeszt").removeClass($("[data-elozoszegely]").attr("data-elozoszegely"));
					$("#tableTeszt").addClass($(this).attr("value"));
				}
				$("[data-elozoszegely]").removeAttr("data-elozoszegely",);
				$(this).attr("data-elozoszegely", $(this).attr("value"));
			}
			if ($("[data-elozoszegely]").attr("data-elozoszegely") == "table-bordered" && $("[data-elozoszin]").attr("data-elozoszin") != "alap") {
				$("#tableTeszt").addClass("border-" + $("[data-elozoszin]").attr("data-elozoszin"));
			} else {
				$("#tableTeszt").removeClass("border-" + $("[data-elozoszin]").attr("data-elozoszin"));
			}
		} else if ($(this).attr("name") == "tableEgyebek") {
			$("#tableTeszt").toggleClass($(this).attr("value"));
		} else if ($(this).attr("name") == "kepekMeret") { // KEPES RESZ ITT KEZDODIK
			$('[data-kepekegyszerudisable]').attr("disabled", true);
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
				$('[data-kepekegyszerudisable]').removeAttr("disabled");
			}, 800);
		} else if ($(this).attr("name") == "kepekKerekites") {
			$('[data-kepekegyszerudisable]').attr("disabled", true);
			if ($(this).attr("value") == "rounded" || $(this).attr("value") == "rounded-circle") {
				if ($("#kepTeszt").hasClass("rounded") || $("#kepTeszt").hasClass("rounded-circle")) {
					$("#kepTeszt").toggleClass("rounded rounded-circle", 800);
				} else {
					$("#kepTeszt").addClass($(this).attr("value"));
				}
			} else {
				$('[data-kepekegyszerudisable]').attr("disabled", true);
				$("#kepTeszt").removeClass("rounded");
				$("#kepTeszt").removeClass("rounded-circle");
			}
			setTimeout(() => {
				$('[data-kepekegyszerudisable]').removeAttr("disabled");
			}, 800);
		} else if ($(this).attr("name") == "kepekPosition") {
			$('[data-kepekegyszerudisable]').attr("disabled", true);
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
				$('[data-kepekegyszerudisable]').removeAttr("disabled");
			}, 800);
		} else if ($(this).attr("name") == "kepekSzegely") {
			$('[data-kepekegyszerudisable]').attr("disabled", true);
			$("#kepTeszt").toggleClass('img-thumbnail');
			setTimeout(() => {
				$('[data-kepekegyszerudisable]').removeAttr("disabled");
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
		} else if ($(this).attr("name") == "alertSzinek") { // UZENETES RESZ ITT KEZDODIK
			$("#alertTeszt").removeClass("alert-" + $("[data-elozoszinalert]").attr("data-elozoszinalert"));
			$("#alertTeszt").addClass("alert-" + $(this).attr("value"));
			var currValue = $(this).attr("value");
			if (ikonokMutatva > 0) {
				$("#ikonokIde").children().each(function () {
					$(this).toggleClass("text-" + $("[data-elozoszinalert]").attr("data-elozoszinalert") + " text-" + currValue);
				});
			}
			$("[data-elozoszinalert]").removeAttr("data-elozoszinalert",);
			$(this).attr("data-elozoszinalert", $(this).attr("value"));
			alertHTML = $("#alertTeszt").prop("outerHTML");
		} else if ($(this).attr("name") == "alertIkonok") {
			// PUNCTUATION KIVETELE
			$("#ikonKodokIde").children().each(function () {
				if ($(this).hasClass("punctuation")) {
					$(this).remove();
				}
			});
			// FO RESZ
			if (ikonokMutatva > 0) {
				if ($(this).is(":checked")) {
					// LATHATLAN KIVETELE
					for (var i = 0; i < 3; i++) {
						$("#ikonKodokIde").children().eq(((ikonokKodHelye[$(this).attr("value")]) * 3) + i).removeClass("d-none");
					}
					$("#ikonokIde").append('<svg class="bi flex-shrink-0 me-2 text-' + $("[data-elozoszinalert]").attr("data-elozoszinalert") + '" role="img" id="' + $(this).attr("value") + 'IkonId"><use xlink:href="#' + $(this).attr("value") + '"/></svg>');
					ikonokMutatva = ikonokMutatva + 1;
				} else {
					for (var k = 0; k < 3; k++) {
						$("#ikonKodokIde").children().eq(((ikonokKodHelye[$(this).attr("value")]) * 3) + k).addClass("d-none");
					}
					$("#" + $(this).attr("value") + "IkonId").remove();
					ikonokMutatva = ikonokMutatva - 1;
					if (ikonokMutatva == 0) {
						$("#alertTeszt").removeClass("d-flex align-items-center");
						$("#alertTeszt").html(alertAlapContent);
						$("#ikonKodokIdePre").addClass("d-none");
					}
				}
			} else {
				if ($(this).is(":checked")) {
					$("#alertTeszt").addClass("d-flex align-items-center");
					alertAlapContent = $("#alertTeszt").html();
					$("#alertTeszt").html("<div id='ikonokIde'></div><div>" + alertAlapContent + "</div>");
					$("#ikonKodokIdePre").removeClass("d-none");
					// LATHATLAN KIVETELE
					for (var i2 = 0; i2 < 3; i2++) {
						$("#ikonKodokIde").children().eq(((ikonokKodHelye[$(this).attr("value")]) * 3) + i2).removeClass("d-none");
					}
					$("#ikonokIde").append('<svg class="bi flex-shrink-0 me-2 text-' + $("[data-elozoszinalert]").attr("data-elozoszinalert") + '" role="img" id="' + $(this).attr("value") + 'IkonId"><use xlink:href="#' + $(this).attr("value") + '"/></svg>');
					ikonokMutatva = ikonokMutatva + 1;
				}
			}
			alertHTML = $("#alertTeszt").prop("outerHTML");
		} else if ($(this).attr("name") == "alertBezaras") {
			$("#alertTeszt").toggleClass($(this).attr("value"));
			if ($(this).attr("value") == "alert-dismissible") {
				if ($(this).is(":checked")) {
					$("#alertTeszt").append('<button type="button" class="btn-close" data-bs-dismiss="alert" id="alertBezaroGomb"></button>');
				} else {
					$("#alertBezaroGomb").remove();
				}
			}
			$("#alertBezaroGomb").on("click", function () {
				$("[data-alertegyszerudisable]").attr("disabled", true);
			});
			alertHTML = $("#alertTeszt").prop("outerHTML");
		}
		$("#alertBezaroGomb").on("click", function () {
			$("[data-alertegyszerudisable]").attr("disabled", true);
		});
	});
	$("#alertVisszahozas").on("click", function () {
		if (!$('#alertTeszt').length) {
			$("#uzenetek").append(alertHTML);
			$("[data-alertegyszerudisable]").removeAttr("disabled");
		}
	});
	// SZINVALTOZTATO KERET GOMBJAI
	$('.change-color').on('click', function () {
		var currBaseColor = $(this).attr("class").split(" ").filter(item => item.startsWith('btn-') && item !== 'btn-sm' && item !== 'btn-lg')[0].split("-");
		var currColor = currBaseColor[currBaseColor.length - 1];
		var colorClass = "";
		if ($("#kifinomultszinek").is(":checked")) {
			colorClass = "bg-" + currColor + "-subtle";
		} else {
			colorClass = "bg-" + currColor;
		}
		$('#szinvalto').addClass('bg-transition').animate({}, 3000, function () {
			var classok = $('#szinvalto').attr('class').split(' ');
			$('#szinvalto').removeClass(classok[classok.length - 2] + " bg-transition").addClass(colorClass);
		});
	});
	// COLOK MUTATÁSA
	$(".change-col").click(function () {
		var colok = parseInt($(this).attr("id"));
		$("#cols").children().slideUp(500, function () {
			$("#cols").empty();
			for (var i = 0; i < (12 / colok); i++) {
				var eredmeny = (100 / (12 / colok));
				if (Number.isInteger(eredmeny)) {
					eredmeny = parseInt(eredmeny);
				} else {
					eredmeny = eredmeny.toFixed(2);
				}
				$("#oszlopSzelesseg").text(eredmeny.toString() + "%");
				$("<div class='col-" + colok + " bg-" + szinek[i % 6] + "'></div>").appendTo($("#cols")).hide().slideDown(500);
			}
		});
	});
});