window.onload = function(){
	var oDemoBody = document.getElementById('demoBody'),
		aSpan = oDemoBody.getElementsByTagName("span"),
		aImg  =oDemoBody.getElementsByTagName('img'),
		oDemoCli = document.getElementById('demoCli'),
		oInp   = oDemoCli.getElementsByTagName('input')[0],
		aBtn   = oDemoCli.getElementsByTagName('button');

		for(var i=0;i<aImg.length;i++){
			aImg[i].index =i;
			aImg[i].onclick =function(){
				that =this;
				oDemoCli.style.display = 'block';
				oDemoCli.style.top	= this.offsetTop+3+'px';
				aBtn[0].onclick = function(){
					aSpan[that.index].innerHTML = oInp.value;
					oDemoCli.style.display = 'none';
				}
				aBtn[1].onclick = function(){
					oDemoCli.style.display = 'none';
				}
			}

		}

		
}