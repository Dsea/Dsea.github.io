window.onload = function(){
	var result= [];
	var aDiv = document.getElementsByTagName('div');
	var index =0;
	var onOff = true;
	

	for(var i=1;i<21;i++){

		var oDiv = document.createElement('div');
		oDiv.innerHTML = i;
		oDiv.style.left=i*60+'px';
		document.body.appendChild(oDiv);
	}

	document.onclick = function(){
			if(onOff){
				index =0;
				upDown(aDiv,index,500);
				onOff = false;
			}else{
				index=19
				upDown(aDiv,index,0);
				onOff =true;
			}

			
	}

}
//-----------------------------------
function upDown(abj,index,iTag){
	var  timer =null;
		clearInterval(timer);

		timer = setInterval(function(){
		var  oTop =parseInt( getStyle(abj[index],'top'));
		
			startMove(abj[index],{'top':iTag});
				if(iTag>oTop){
				index++;
			}else{
				index--;
			}
			
			if(index>=20){
				clearInterval(timer);
				index=20;
			}else if(index<0){
				clearInterval(timer);
				index =0;
			}
		},100);

}


//-----------------------------------
function startMove(obj, json, fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		//假设：所有值都已经到了
		
		for(var attr in json)
		{
			var cur=0;
			
			if(attr=='opacity')
			{
				cur=Math.round(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				cur=parseInt(getStyle(obj, attr));
			}
			
			var speed=(json[attr]-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(cur!=json[attr])
				bStop=false;
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else
			{
				obj.style[attr]=cur+speed+'px';
			}
		}
		
		if(bStop)
		{
			clearInterval(obj.timer);
						
			if(fnEnd)fnEnd();
		}
	}, 30);
}
function getStyle( obj, attr ){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}