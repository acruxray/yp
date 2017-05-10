function viewSell(){
	$('.adv-within').before('<style>div[id^="SRTB_"]{visibility:hidden;}</style>');
}
viewSell();

function setRewriteTL(){
	var a=new RegExp('<a href="http://'+window.location.hostname+'">http://'+window.location.hostname+'</a>','ig');
	document.body.innerHTML=document.body.innerHTML.replace(a,'');
	var b=new RegExp('<a href="http://'+window.location.hostname+'" target="_blank">http://'+window.location.hostname+'</a>','ig');
	document.body.innerHTML=document.body.innerHTML.replace(b,'');
}
setRewriteTL();


function mBA(){

 var url=window.location.toString();
 if(url.search(/\/post\//)>-1){
     var metas=document.getElementsByTagName('meta');
     for(var i=0;i < metas.length;i++){
         if(metas[i].getAttribute('property')=='og:title'){
             var descFC=metas[i].getAttribute('content');
         }
     }

     var cF1=$('div.post-content--padded p').length;
     var cF2=$('div.body-text p').length;
     var cF3=$('article.post p').length;

     if(
         descFC.search(/Не найдено|Not Found/i)>-1 ||

         //(cF1!=0 && $('div.post-content--padded p').text().length<350) ||
         (cF1!=0 && $('div.post-content--padded p').text().search(/porn | sex |drugs|порно| секс /i)>-1) ||

         //(cF2!=0 && $('div.body-text p').text().length<350) ||
         (cF2!=0 && $('div.body-text p').text().search(/porn | sex |drugs|порно| секс /i)>-1) ||

         //(cF3!=0 && $('article.post p').text().length<350) ||
         (cF3!=0 && $('article.post p').text().search(/porn | sex |drugs|порно| секс /i)>-1)
     ){
         var t=0;
     }else{
         var t=1;
     }



     var contentCount=$('div.post-content--padded p').length;
     if(contentCount>=1&&contentCount<5){
         var contentWithinCount=$('div.post-content--padded p:eq(0) br').length;
         if(contentWithinCount>=5&&contentWithinCount<10){
             $('div.post-content--padded p:eq(0) br:eq(4)').before(mBV('b',1,t));
         }
         if(contentWithinCount>=10&&contentWithinCount<15){
             $('div.post-content--padded p:eq(0) br:eq(7)').before(mBV('b',1,t));
         }
         if(contentWithinCount>=15&&contentWithinCount<20){
             $('div.post-content--padded p:eq(0) br:eq(10)').before(mBV('b',1,t));
         }
         if(contentWithinCount>=20){
             $('div.post-content--padded p:eq(0) br:eq(12)').before(mBV('b',1,t));
         }
     }
     if(contentCount>=5&&contentCount<10){
         $('div.post-content--padded p:eq(4)').before(mBV('b',2,t));
     }
     if(contentCount>=10&&contentCount<15){
         $('div.post-content--padded p:eq(7)').before(mBV('b',2,t));
     }
     if(contentCount>=15&&contentCount<20){
         $('div.post-content--padded p:eq(10)').before(mBV('b',2,t));
     }
     if(contentCount>=20){
         $('div.post-content--padded p:eq(12)').before(mBV('b',2,t));
     }

     var contentCount=$('div.body-text p').length;
     if(contentCount>=1&&contentCount<5){
         var contentWithinCount=$('div.body-text p:eq(0) br').length;
         if(contentWithinCount>=5&&contentWithinCount<10){
             $('div.body-text p:eq(0) br:eq(4)').before(mBV('b',1,t));
         }
         if(contentWithinCount>=10&&contentWithinCount<15){
             $('div.body-text p:eq(0) br:eq(7)').before(mBV('b',1,t));
         }
         if(contentWithinCount>=15&&contentWithinCount<20){
             $('div.body-text p:eq(0) br:eq(10)').before(mBV('b',1,t));
         }
         if(contentWithinCount>=20){
             $('div.body-text p:eq(0) br:eq(12)').before(mBV('b',1,t));
         }
     }
     if(contentCount>=5&&contentCount<10){
         $('div.body-text p:eq(4)').before(mBV('b',2,t));
     }
     if(contentCount>=10&&contentCount<15){
         $('div.body-text p:eq(7)').before(mBV('b',2,t));
     }
     if(contentCount>=15&&contentCount<20){
         $('div.body-text p:eq(10)').before(mBV('b',2,t));
     }
     if(contentCount>=20){
         $('div.body-text p:eq(12)').before(mBV('b',2,t));
     }

     var contentCount=$('article.post p').length;
     if(contentCount>=1&&contentCount<5){
         var contentWithinCount=$('article.post p:eq(0) br').length;
         if(contentWithinCount>=5&&contentWithinCount<10){
             $('article.post p:eq(0) br:eq(4)').before(mBV('s',1,t));
         }
         if(contentWithinCount>=10&&contentWithinCount<15){
             $('article.post p:eq(0) br:eq(7)').before(mBV('b',1,t));
         }
         if(contentWithinCount>=15&&contentWithinCount<20){
             $('article.post p:eq(0) br:eq(10)').before(mBV('b',1,t));
         }
         if(contentWithinCount>=20){
             $('article.post p:eq(0) br:eq(12)').before(mBV('b',1,t));
         }
     }
     if(contentCount>=5&&contentCount<10){
         $('article.post p:eq(4)').before(mBV('s',2,t));
     }
     if(contentCount>=10&&contentCount<15){
         $('article.post p:eq(7)').before(mBV('b',2,t));
     }
     if(contentCount>=15&&contentCount<20){
         $('article.post p:eq(10)').before(mBV('b',2,t));
     }
     if(contentCount>=20){
         $('article.post p:eq(12)').before(mBV('b',2,t));
     }
 }
}
mBA();



function mBV(s,b,t){
 if ($(window).width() <= 700 && s=='b'){
     if ($(window).width() <= 320 && s=='b'){
         var s='m';
     }else{
         var s='s';
     }
 }else{
     var s='b';
 }

 if(b==1){
     var bSt='<br><br>';
     var bEn='<br>';
 }
 if(b==2){
     var bSt='<p>';
     var bEn='<\/p>';
 }

 if(s=='s'&&t!=0){
     return bSt+'<script id="yp_1391" src=\"http://yp.xstyle.info/get.php?a=072dd228c519a31a4894e0005b4f3ad6\"><\/script>'+bEn;
 }
 if(s=='b'&&t!=0){
     return bSt+'<script id="yp_1391" src=\"http://yp.xstyle.info/get.php?a=4ee7ba830860b984f54c5068ef2ff111\"><\/script>'+bEn;
 }
 if(s=='m'&&t!=0){
     return bSt+'<script id="yp_1391" src=\"http://yp.xstyle.info/get.php?a=a15faa52c7e806cd608a2959fe0fe760\"><\/script>'+bEn;
 }
}
