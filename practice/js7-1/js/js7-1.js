window.onload = function(){
	var aInput = document.getElementsByTagName('input'),
		aBtn = document.getElementsByTagName('button');
		aBtn[0].onclick = function(){
			for(var i=0;i<aInput.length;i++){
				aInput[i].checked ='checked';
			}
		}
		aBtn[1].onclick = function(){
			for(var i=0;i<aInput.length;i++){
				aInput[i].checked =false;
			}
		}
		aBtn[2].onclick = function(){
			for(var i=0;i<aInput.length;i++){
				if(aInput[i].checked ){
					aInput[i].checked = false;
				}
				else {
					aInput[i].checked = 'checked';
				}
			}
		}
}