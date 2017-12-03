window.onload = function(){

	var oBox = document.getElementById("box"),
		aUl   = document.getElementsByTagName('ul');
		
	
		for(var i=0;i<aUl.length;i++){

			aUl[i].onclick = function(){
				if(this.onOff){
					expansion(this,'block',false)
				}else{
					expansion(this,'none',true);
				}
				
			}
		}





}
//------------------
function expansion(obj,val,onOff){
		var arr = obj.children;
		for(var i=0;i<arr.length;i++){
			arr[i].style.display =val;
			obj.onOff = onOff;
		}

	}
