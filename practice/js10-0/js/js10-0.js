window.onload = function(){

	var oDemo = document.getElementById('demo'),
		aDiv = oDemo.getElementsByTagName('div'),
		aInput = oDemo.getElementsByTagName('input'),
		aBtn = oDemo.getElementsByTagName('button');
		aP    = oDemo.getElementsByTagName('p'),
		aSpan = oDemo.getElementsByTagName('span'),
		aImg = oDemo.getElementsByTagName('img');
		oTab = document.getElementById('tab'),
		oAdd = document.getElementById('add'),
		oTotal = document.getElementById('total');

		var abjArr =[];
		var arr =0;
			

			abjArr.push(aP,aDiv);


		for(var i=0;i<aDiv.length;i++){
			aBtn[i].index =i;
			that =this;
			aBtn[i].onclick = function(){
				this.pos = getStyle(aDiv[this.index],'left');

				this.aValue= (aInput[this.index].value).toString();

				this.asetTime = parseInt(toDate(this.aValue)[0])*24*60*60+parseInt(toDate(this.aValue)[1])*60*60+parseInt(toDate(this.aValue)[2])*60+parseInt(toDate(this.aValue)[3]);

				addInterval(this,this.index,this.asetTime,abjArr,parseInt(this.pos),aP,aSpan,oAdd,oTotal);
				
			}
		}

								
				


					



		

}

//---------------------------------------------
function  addInterval(obj,index,atTime,abjArr,pos,abjAp,abjSpan,objTab,objTotal){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			this.sum =0;
			var oDate = new Date();
			var ogetTime = oDate.getDate()*24*60*60+oDate.getHours()*60*60+oDate.getMinutes()*60+oDate.getSeconds();
			var oTime = atTime-ogetTime;
			var sSeconds = oTime%60;
			var sMinutes = Math.floor(oTime/60)%60;
			var sHours   = Math.floor(oTime/3600)%60;
			var sDay     = Math.floor(oTime/86400)%24;
			document.title = oDate;
			abjArr[0][index*2].innerHTML ='剩余'+sDay+'天'+sHours+'时'+sMinutes+'分'+sSeconds+'秒';

			if(oTime <=0){
				clearInterval(obj.timer);
				shake(abjArr[1][index],'left',pos);
				clearTimeout(obj.time1);
				obj.time1 = setTimeout(function(){
					
					startMove(abjArr[1][index],{'top':200,'opacity':1});

					var oTr = document.createElement('tr');
						oTd1 =document.createElement('td');
						oTd2 =document.createElement('td');
						oTd3 =document.createElement('td');
						oImg = document.createElement('img');

						oImg.src ="images/"+(index+1)+".jpg";
						oTd1.innerHTML = abjAp[index*2+1].innerHTML;
						oTd2.innerHTML = abjSpan[index*2+1].innerHTML;

						oTd3.appendChild(oImg);
						oTr.appendChild(oTd1);
						oTr.appendChild(oTd2);
						oTr.appendChild(oTd3);
						objTab.appendChild(oTr);

						for(var j=1;j<=index*2+1;j+=2){
							this.sum+=parseInt(abjSpan[j].innerHTML);
						}
						
						objTotal.innerHTML= "总价："+this.sum+"元";
						
				},1000);

				
			}
			

	},500);
}


//-------------------------------------------------------------------------------------------------------
function toDate(str){
		var num = '';
			arr =[];
		for(var i=0;i<str.length;i++){

			if(parseFloat(str[i])!=str[i]){
				arr.push(num);
				num =''
			}else{
				num+=str[i].toString();
				
			}
		}
		return arr;
}
function addArr(arr){
	var sum = 0;
	for(var i=0;i<arr.length;i++){
		sum+=arr[i];
	}
	return sum;
}

function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }

function shake ( obj, attr,pos, endFn ) {

	var arr = [];			
	var num = 0;
	var timer = null;
		
	for ( var i=5; i>0; i-- ) {
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
	}, 30);
}
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
	}, 30);
}