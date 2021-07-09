$(document).ready(function () {
    //common teaser head
	headHtml();
	//common nav ui
	navHtml();
	navSns();
	navDepth();
});

function headHtml() {
	var headHtml = '';
	headHtml += '<div class="info">'
		+ '<a href="#"><span class="logo"><img src="http://img.imbc.com/broad/tv/ent/hangoutwithyoo/images//logo.png" alt="에스 에프 에잇 로고"></span></a>'
		+ '<div class="cont_right">'
		+ '<h2>에스 에프 에잇</h2>'
		+ '<div class="pro_info">  '
		+ '<span class="time">매주 수,목 저녁 8시 55분</span>'
		+ '<button type="button" class="btn_like "><span class="like">1,111</span></button>'
		+ '</div>'
		+ '</div>   '
		+ '</div>         '
		+ '<div class="flt">'
		+ ' <div class="flt_txt">'
		+ ' <span>5월 22일</span><br>저녁 8시 55분 첫방송!'
		+ '</div>'
		+ '<button type="button" title="닫기">닫기</button>'
		+ '</div>';
	$('.sc_type1').append(headHtml);
}

//common navi
function navHtml() {
	var navHtml = '';
	navHtml += '<ul>'
		+ '<li><a href="#" class="depth1">다시보기</a></li>'
		+ '<li><a href="#" class="depth1">시청자의견</a></li>'
		+ '<li>'
		+ '    <a href="#" class="depth1">예고보기</a>'
		+ '    <div class="dropdown">'
		+ '        <a href="">다시보기</a>'
		+ '        <a href="">예고보기</a>'
		+ '        <a href="">화제의 1분</a>'
		+ '    </div>'
		+ '</li>'
		+ '<li><a href="#" class="depth1">기획의도</a></li>'
		+ '<li>'
		+ '    <a href="#" class="depth1">제작진소개</a>'
		+ '</li>'
		+ '<li><a href="#" class="depth1">등장인물</a></li>'
		+ '<li><a href="#" class="depth1">연예뉴스</a></li>'
		+ '<li><a href="#" class="depth1">현장포토</a></li>'
		+ '<li><a href="#" class="depth1">화제의 1분(무료)</a></li>'
		+ '<li><a href="#" class="depth1">영상스케치</a></li>'
		+ '</ul>'
		+ '<div class="wrap_sns">'
		+ '    <button type="button" class="btn_sns">SNS 링크</button>'
		+ '    <div class="list">'
		+ '        <ul>'
		+ '            <li class="twt"><a href="#">트위터 바로가기</a></li>'
		+ '            <li class="fb"><a href="#">페이스북 바로가기</a></li>'
		+ '            <li class="insta"><a href="#">인스타그램 바로가기</a></li>'
		+ '            <li class="ytb"><a href="#">유튜브 바로가기</a></li>'
		+ '            <li class="ch"><a href="#">채널 바로가기</a></li>'
		+ '        </ul>'
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
	dropdown.each(function () {
		var dropdownW = 0;
		$(this).find('a').each(function () {
			dropdownW += Math.floor($(this).context.clientWidth) + 10;
			$(this).parent().width(dropdownW);
			$(this).parent().css('margin-right', -$(this).parent().width() / 2);
		});
	});
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
	sns.on('mouseover focus', function () {
		$(this).find('.list').stop().slideDown('fast');
	});
	sns.on('mouseleave blur', function () {
		$(this).find('.list').stop().slideUp('fast');
	});
}