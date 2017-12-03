window.onload = function(){
	var oText =document.getElementById('content'),
		oConMid = document.getElementById('conmid'),
		oBtn = oConMid.getElementsByTagName('button')[0],
		oSpan = oConMid.getElementsByTagName('span')[0],
		aLi = oConMid.getElementsByTagName('li');
		oVal = document.getElementById('val');
	var oTxt ='',
		num =0,
		str =''
		timer =null;
		

		oBtn.onclick = function(){
			
			var index=0;

			
			oTxt = oText.value;
			num = oTxt.length;
			for(var i=0;i<aLi.length;i++){
						aLi[i].style.animation ='';
			}

			
			clearInterval(timer);
			timer = setInterval(function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].style.backgroundColor ='#BAF875';
				}
				oVal.innerHTML +=oTxt.charAt(0);
				oTxt=oTxt.replace(oTxt.charAt(0),'');
				oText.value= oTxt;
				aLi[index%10].style.backgroundColor ='red';
				oSpan.innerHTML = index+'/'+num;
				index++;
				if(index>=num){
					for(var i=0;i<aLi.length;i++){
						aLi[i].style.animation = 'aLiColor 10s';
					}
					clearInterval(timer);

				}
				
			},100);
		
		}
}