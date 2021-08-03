$(document).ready(function () {
	//common teaser head
	headHtml();
	//common nav ui
	navHtml();
	//navSns();
	//navDepth();
	//main ui

});


function headHtml() {
	var headHtml = '';

	headHtml += '<div class="info">'
		+ '<a href="//program.imbc.com/' + bid + '"><span class="logo"></span></a>'
		+ '<div class="cont_right">'
		+ '<h2></h2>'
		+ '<div class="pro_info">  '
		+ '<span class="time"></span>'
		+ '<button type="button" class="btn_like" style="display:none;">'
		+ '    <span class="like_txt">좋아요 클릭</span>'
		+ '    <span class="like"></span>'
		+ '</button >'
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '<div class="flt" style="display:none;">'
		+ '<div class="flt_slide"></div>'
		+ '<div class="flt_dots"></div>'
		+ '</div>';
	$('.sc_type1').append(headHtml);
	MenuUtil.SetMenu();
}
//common navi
function navHtml() {
	var navHtml = '';
	navHtml += '<ul></ul>'
		+ '<div class="wrap_sns" style="display:none;">'
		+ '    <button type="button" class="btn_sns">SNS 링크</button>'
		+ '    <div class="list">'
		+ '        <ul></ul>'
		+ '    </div>'
		+ '</div>';
	$('#proNav').append(navHtml);
}

//nav dropdown
function navDepth() {
	var nav = $('.sc_nav');
	var navItems = nav.find('.depth1');
	var dropdown = nav.find('.dropdown');
	//width 조정
	//dropdown.each(function () {
	//    var dropdownW = 0;
	//    $(this).find('a').each(function () {
	//        dropdownW += Math.floor($(this).context.clientWidth) + 10;
	//        $(this).parent().width(dropdownW);
	//        $(this).parent().css('margin-right', -$(this).parent().width() / 2);
	//    });
	//});
	dropdown.hide(); //숨김
	navItems.on('mouseover focus', function () {
		navItems.removeClass('on');
		dropdown.hide();
		$(this).addClass('on').next().show();
	});
	dropdown.find('a:last-child').on('blur', function () {
		$(this).parent().show();
		$(this).parent().prev().removeClass('on');
	});
	nav.on('mouseleave blur', function () {
		dropdown.hide();
		navItems.removeClass('on');
	});
}

function navSns() {
	var sns = $('.sc_nav .wrap_sns');
	sns.on('mouseover keyup', function () {
		$(this).find('.list').stop().slideDown('fast');
	});
	sns.on('mouseleave focusout', function () {
		$(this).find('.list').stop().slideUp('fast');
	});
}

function noticeRoll(containerID, buttonID, autoStart) {
	var $element = $('#' + containerID).find('.notice_list');
	var $prev = $('#' + buttonID).find('.btn-left');
	var $next = $('#' + buttonID).find('.btn-right');
	var autoPlay = autoStart;
	var auto = null;
	var speed = 3300;
	var timer = null;
	var index = 1;
	var total = $('#' + containerID).find('li').length;
	var move = $element.children().outerHeight();
	var first = false;
	var lastChild;

	lastChild = $element.children().eq(-1).clone(true);
	lastChild.prependTo($element);
	$element.children().eq(-1).remove();

	if ($element.children().length == 1) {
		$element.css('top', '0px');
	} else {
		$element.css('top', '-' + move + 'px');
	}
	if (autoPlay) {
		timer = setInterval(moveNextSlide, speed);
		auto = true;
	}
	$element.find('>li').bind({
		'mouseenter': function () {
			if (auto) {
				clearInterval(timer);
			}
		},
		'mouseleave': function () {
			if (auto) {
				timer = setInterval(moveNextSlide, speed);
			}
		}
	});

	$prev.bind({
		'click': function () {
			movePrevSlide();
			return false;
		},
		'mouseenter': function () {
			if (auto) {
				clearInterval(timer);
			}
		},
		'mouseleave': function () {
			if (auto) {
				timer = setInterval(moveNextSlide, speed);
			}
		}
	});

	$next.bind({
		'click': function () {
			moveNextSlide();
			return false;
		},
		'mouseenter': function () {
			if (auto) {
				clearInterval(timer);
			}
		},
		'mouseleave': function () {
			if (auto) {
				timer = setInterval(moveNextSlide, speed);
			}
		}
	});

	function movePrevSlide() {

		if (index < 2) {
			index = total;
		} else {
			index--;
		}
		$('.num').text(index);
		$element.each(function (idx) {
			if (!first) {
				$element.eq(idx).animate({ 'top': '0px' }, 'normal', function () {
					lastChild = $(this).children().eq(-1).clone(true);
					lastChild.prependTo($element.eq(idx));
					$(this).children().eq(-1).remove();
					$(this).css('top', '-' + move + 'px');
				});
				first = true;
				return false;
			}

			$element.eq(idx).animate({ 'top': '0px' }, 'normal', function () {
				lastChild = $(this).children().filter(':last-child').clone(true);
				lastChild.prependTo($element.eq(idx));
				$(this).children().filter(':last-child').remove();
				$(this).css('top', '-' + move + 'px');
			});
		});
	}

	function moveNextSlide() {
		if (index > total - 1) {
			index = 1;
		} else {
			index++;
		}
		$element.each(function (idx) {

			var firstChild = $element.children().filter(':first-child').clone(true);
			firstChild.appendTo($element.eq(idx));
			$element.children().filter(':first-child').remove();
			$element.css('top', '0px');

			$element.eq(idx).animate({ 'top': '-' + move + 'px' }, 'normal');
		});
		$('.num').text(index);
	}
	$('.num').text(index);
	$('.sum').text(total);
}

$(window).load(function () {
	//teaser flt banner
	//$('.flt button').click(function () {
	//    $(this).parent().hide();
	//});


	//$('.btn_like').click(function () {
	//    $(this).toggleClass('on');
	//})

	//poster flt banner
	//$('.flt_box .close_flt').click(function () {
	//    $(".flt_vod").remove();
	//    $(this).parent().hide();
	//});

});