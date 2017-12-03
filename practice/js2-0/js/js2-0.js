window.onload = function(){
	var oBox = document.getElementById('box');
	var aBtn = document.getElementsByTagName('button');
	var reasult = null;
	var oColor=['red','blue','green','yellow'];

		aBtn[0].onclick = function(){

			oBox.innerHTML = '';

			for(var i=0;i<100;i++){
				var  arr=document.createElement("li");
				arr.innerHTML=i;
				arr.style.left=(i%10)*60+'px';
				arr.style.top= parseInt(i/10)*60+'px';
				arr.style.backgroundColor=oColor[i%4];
				oBox.appendChild(arr);

			}
			
		}

		aBtn[1].onclick = function(){

			oBox.innerHTML = '';

			for(var i=0;i<20;i++){
				var  arr=document.createElement("li");
				arr.innerHTML=i;
				arr.style.left=i*60+'px';
				arr.style.top=i*60+'px';
				if(i>10){
					arr.style.top=(-i*60+20*60)+'px';
				}
				arr.style.backgroundColor=oColor[i%4];
				oBox.appendChild(arr);
			}
		}
}
