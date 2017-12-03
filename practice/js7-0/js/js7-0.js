window.onload = function(){
	var oDemo = document.getElementById('demo'),
		aSpan = document.getElementsByTagName('span'),
		aLi	  = document.getElementsByTagName('li'),
		oUl   = document.getElementsByTagName('ul')[0],
		oTxt =''
		arr=['很差','较差','不错','推荐','力荐'];

		for(var i=0;i<aLi.length;i++){
			aLi[i].index =i;
			
			aLi[i].onmouseover = function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].style.backgroundColor='#E4E0E0';
				}
				aSpan[1].innerHTML=arr[this.index];
				for(var j=this.index;j>=0;j--){
					aLi[j].style.backgroundColor = 'red';
				}
					
			}

			aLi[i].onmouseout = function(){
				for(var j=this.index;j>=0;j--){
					aLi[j].style.backgroundColor = '#E4E0E0';
				}
			}
			aLi[i].onclick = function(){
				this.onmouseout =null;
				for(var j=this.index;j>=0;j--){
					aLi[j].style.backgroundColor = 'red';
				}
			}

		}
		
		
}