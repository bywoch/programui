
$(document).ready(function () {
	//clip - autoplay button
	var autoPlay = $('.autoplay');
	$(autoPlay).click(function () {
		$(this).toggleClass('off');
	});
	//keyboard control popup
	$(".keyboard_ctrl .info-tit").click(function () {
		$(".keyboard_ctrl .popup").show();
	});
	$('.keyboard_ctrl .close_popup').click(function () {

		$('.keyboard_ctrl .popup').hide();
	});
	//sns
	$(".btn_share").click(function (e) {
		e.preventDefault();
		$(this).toggleClass('on');
		$(".layer_sns").toggle();
	});
	//sns layer hide
	$('body').click(function (e) {
		if ($('.btn_share').hasClass('on')) {
			if (!$(e.target).is('.btn_share, .layer_sns')) {
				$('.btn_share').removeClass('on');
				$('.layer_sns').hide();
			};
		}
	});
	//selectbox ui
	$('.sort .check').click(function () {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	})
	
	// DropDown 객체 생성자 함수 정의
	var select = new DropDown($('.select-box'));
	function DropDown(el) {
		// 객체 속성 초기화
		this.select = el; // 드롭다운 선택 상자 요소
		this.placeholder = this.select.children('p'); // 선택한 옵션을 나타내는 요소
		this.opts = this.select.find('ul.dropdown > li'); // 드롭다운 내 옵션 요소들
		this.val = ''; // 선택한 옵션의 값
		var obj = this;

		// 드롭다운 선택 상자를 클릭했을 때 동작 설정
		obj.placeholder.on('click', function () {
			$('.dropdown').toggle(); // 드롭다운 내 옵션들을 토글하여 표시 또는 숨김
		});

		// 드롭다운 내 옵션 요소를 클릭했을 때 동작 설정
		obj.opts.on('click', function () {
			var opt = $(this); // 선택한 옵션 요소
			obj.val = opt.text(); // 선택한 옵션의 텍스트 값을 저장
			obj.index = opt.index(); // 선택한 옵션의 인덱스 값을 저장
			obj.placeholder.text(obj.val); // 선택한 옵션의 텍스트를 플레이스홀더에 표시
			obj.select.find('.dropdown').hide(); // 옵션 선택 후 드롭다운을 숨김 처리

			// 예외 처리로 함수 호출 시도
			try {
				selYear(obj.val); // 선택한 연도에 대한 동작 수행 (함수 호출)
			} catch (e) { }
		});
	}

});