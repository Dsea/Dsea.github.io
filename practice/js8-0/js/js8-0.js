window.onload =function(){

	var oBox = document.getElementById('box'),
		aBtn = document.getElementsByTagName('button'),
		oUl = document.getElementById('show');
		oUl.index=30;
		aBtn[0].onmousedown = function(){
			setTimer(oUl,true);	
			
		}
		aBtn[1].onmousedown = function(){
			setTimer(oUl,false);	
			
		}
		

		
		
			
}
function setTimer(obj,onOff){
	
	this.timer = setInterval(function(){
			
			if(onOff){
				obj.index--;
			}else{
				obj.index++;
			}

			
			obj.style.top=obj.index+'px'

		if(parseInt(obj.style.top)>30||parseInt(obj.style.top)<=-obj.offsetHeight/2-100){

			clearInterval(this.timer);

		}
					
	},10);
	this.onmouseup = function(){
		clearInterval(this.timer);
		
	}
}