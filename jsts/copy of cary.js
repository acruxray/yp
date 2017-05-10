function afr(){
	var af = document.createElement("iframe");
	af.setAttribute("class", "advf");
	af.setAttribute("name", "af");
	document.body.appendChild(af);
}
afr();
function collectts(j){
	var d=document.getElementById('abts');
	var e=d.getElementsByTagName('a');
	for(var i=0;i<e.length;i++){
		if(i!=0||i!=3){
			if(i==1||i==2){
				if(j==0){
					var r=e[i+3].getAttribute('onclick');
					r=r.replace(';','');
					r=r.replace('(this, this, this)','');
					var x=window[r]+' ';
					x=x.match(/\+=\s'(.*)';/i);
					x=x[0].replace("+= '","");
					x=x.replace("';","");
					var oas=";window.open('"+e[i+3].href+x+"','af');collectts(1);";
				}else{
					var oas=";";
				}
				var oat=e[i].getAttribute('onclick');
				oat=oat.split(";",1);
				e[i].setAttribute("onclick",oat+oas);
			}
		}
	}
}
collectts(0);