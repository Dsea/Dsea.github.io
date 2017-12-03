window.onload = function(){
	var oBox = document.getElementById('box'),
		oUl = document.getElementById('demo'),
		aP = oBox.getElementsByTagName('p');
	var timer =null,
		num =0;

		oUl.style.width = oUl.offsetWidth*2+'px';
		oUl.innerHTML+=oUl.innerHTML;
		

		timer = setInterval(function(){
			for(var i=0;i<aP.length;i++){
				aP[i].style.bottom = -50+'px';
			}

			startMove(aP[num],{'bottom':0});
			
			document.title = num;
			if(Math.abs(parseInt(oUl.style.left))==oUl.offsetWidth/2){
				oUl.style.left = 0;
				
			}
			oUl.style.left = oUl.offsetLeft-500+'px';
			
			
			
			
			num++;
			if(num >4){
				num=0;
			}

		},2000);

}

//--------------------
//获取外部样式
function getStyle( obj, attr ){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}
//智能社运动框架
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
	}, 40);
}