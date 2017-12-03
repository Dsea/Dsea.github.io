window.onload = function(){
	var oCon = document.getElementById('con'),
		oUl = document.getElementById('ul1'),
		oContent = document.getElementById('content'),
		oFoot = document.getElementById('foot'),
		aLi = oFoot.getElementsByTagName('li'),
		aDiv = oFoot.getElementsByTagName('div'),
		aInput = oFoot.getElementsByTagName('input'),
		aBtn = oFoot.getElementsByTagName('button'),
		str = oContent.innerHTML;

	var onOff =true,
		oval = '';



		oCon.onclick = function(){
			if(onOff){
				oUl.style.display ='block';
				onOff =false;
			}else{
				oUl.style.display = 'none';
				oFoot.style.display = 'none';
				onOff =true;
			}

		}


		oUl.onclick = function(){
			oFoot.style.display = 'block';
		}

		for(var i=0;i<aDiv.length;i++){
			

			aLi[i].index =i;
			aLi[i].onclick = function(){
				for(var i=0;i<aDiv.length;i++){
					aDiv[i].style.display = 'none';
				}
				aDiv[this.index].style.display = 'block';
			}
		}
	//-------------------------
		aBtn[0].onclick = function(){
			oVal =aInput[0].value;
			
			oContent.innerHTML =str.replace(new RegExp(oVal,'g'),"<font color='red'>"+oVal+"</font>");

		}
		aBtn[1].onclick = function(){
			oVal =aInput[1].value;
			oVal2 = aInput[2].value;
			
			oContent.innerHTML =str.replace(new RegExp(oVal,'g'),"<font color='red'>"+oVal2+"</font>");
		}

}
