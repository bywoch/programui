$(document).ready(function () {
    //common teaser head
	headHtml();
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