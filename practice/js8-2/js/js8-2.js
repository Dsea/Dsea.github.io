window.onload = function(){
	var oShow = document.getElementById('show'),
		aLi   = oShow.getElementsByTagName('li'),
		aA    = oShow.getElementsByTagName('a'),

		oList = document.getElementById('alist'),
		aUl =oList.getElementsByTagName('ul'),
		timerIn=null,
		timerOut=null;;

		for(var i=0;i<aA.length;i++){
			clearTimeout(this.timerIn)
			aA[i].index=i;
			aUl[i].fall =i;
			aA[i].onmouseover = function(){
				for(var j=0;j<aA.length;j++){
				aA[j].style.backgroundColor="#7A94FD";
				aUl[j].style.display = 'none';
				}
				that = this;
				this.timerIn=setTimeout(function(){
					aA[that.index].style.backgroundColor="#77B2FB";
					aUl[that.index].style.display = 'block';
					
				},100);
			
			}
		}
		for(var i=0;i<aA.length;i++){
			aA[i].onmouseout  = function(){
				clearTimeout(this.timerOut);
				this.timerOut=setTimeout(function(){
					aA[that.index].style.backgroundColor="#77B2FB";
					aUl[that.index].style.display = 'none';
					
				},300);

			}
			aUl[i].onmouseover = function(){
				
				clearTimeout(aA[this.fall].timerOut);
				
				this.style.display = 'block';
				this.onmouseout  = function(){
					this.style.display = 'none';
					
				}
			}


		}

		
}