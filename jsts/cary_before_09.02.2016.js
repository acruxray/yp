function viewSell(){
	$('.adv-within').before('<style>.takru{display:none;}div[id^="SRTB_"]{visibility:hidden;}</style>');
	var url=window.location.toString();
	var nowTime=Math.floor(Date.now()/1000);
	var lfflTo=localStorage.getItem('lfflTo');
	if(url.search(/\/post\//)>-1&&(lfflTo==null||(nowTime-lfflTo)>=180)){
		localStorage.setItem('lfflTo',nowTime);
		$('body').attr('data-control-l','post');
	}
}
viewSell();
$('[data-control-l="post"]').click(function(){
	$('body').removeAttr('data-control-l');
	window.location=window.location;
});