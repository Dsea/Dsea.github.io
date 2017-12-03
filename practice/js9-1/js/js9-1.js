window.onload =function(){

	var aImg = document.getElementsByTagName('img');
	var aPos = [];

	for(var i=0;i<aImg.length;i++){

		var oPos = getStyle(aImg[i],'top');
		aPos.push(oPos);
		aImg[i].style.left = i*110+50+'px';

		aImg[i].index = i;
		aImg[i].onmouseover = function(){
			shake(this,'top',parseInt(aPos[this.index]));
			
		}
	}


}
function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }

function shake ( obj, attr,pos, endFn ) {

	var arr = [];			
	var num = 0;
	var timer = null;
		
	for ( var i=20; i>0; i-=2 ) {
		arr.push( i, -i );
	}
	arr.push(0);
		
	clearInterval( obj.shake );
	obj.shake = setInterval(function (){
		obj.style[attr] = pos + arr[num] + 'px';
		num++;
		if ( num === arr.length ) {
			clearInterval( obj.shake );
			endFn && endFn();
		}
	}, 50);
}