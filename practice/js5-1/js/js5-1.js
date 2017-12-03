window.onload = function(){

	var oDemoBody = document.getElementById('demoBody'),
		aLi       = oDemoBody.getElementsByTagName('li'),
		aDiv      = oDemoBody.getElementsByTagName('div');


		for(var i=0;i<aLi.length;i++){
			aLi[i].index =i;
			aLi[i].onmouseover = function(){
				for(var j=0;j<aDiv.length;j++){
					aDiv[j].style.display = 'none';
				}
				aDiv[this.index].style.display = 'block';

			}
			
		}

}