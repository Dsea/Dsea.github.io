window.onload = function(){
	var oBox = document.getElementById('box'),
		aLi = document.getElementsByTagName('li'),
		oImg = document.getElementById('show');

		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onclick = function(){
				for(var j=0;j<aLi.length;j++){
					aLi[j].style.backgroundColor ='white';
				}
				this.style.backgroundColor ="#FE57CA";
				oImg.src="images/"+this.index+".jpg";
			}
		}
}