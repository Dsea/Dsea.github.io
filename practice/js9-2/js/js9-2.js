window.onload = function(){
	var oBox = document.getElementById('box'),
		oDemo = document.getElementById('demo'),
		oShow = document.getElementById('show'),
		oUl = oBox.getElementsByTagName('ul')[0],
		aLi = oBox.getElementsByTagName('li');

		for(var i=0;i<aLi.length;i++){
			aLi[i].style.left = i*60+'px';
		}		

		oUl.onclick = function(){
			var timer =null,
				num =aLi.length-1;

			clearInterval(timer);
			timer = setInterval(function(){
				starMove(aLi[num],{'top':-120,'opacity':0});
				starMove(oShow,{'left':0,'opacity':0});
				num--;
				if(num < 0){
					clearInterval(timer);
				}
				onOff = true;
				
			},80);
			
			setTimeout(function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].style.top=0;
					aLi[i].style.opacity = 1;

					oShow.style.left = -460+'px';
					oShow.style.opacity = 1;
				}
			},2000);
			
		}

		





}

//获取外部样式
function getStyle( obj, attr ){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}
//智能社运动框架
function starMove(obj, json, fnEnd)
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
