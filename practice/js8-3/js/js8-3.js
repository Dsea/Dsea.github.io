window.onload = function(){
	var oBox = document.getElementById('box'),
		aBtn = oBox.getElementsByTagName('button'),
		oImg = oBox.getElementsByTagName('img')[0],
		aLi = oBox.getElementsByTagName('li'),
		aUl = oBox.getElementsByTagName('ul');
	var	n=0,
		m=1,
		timer =null;


		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index = i;
			aBtn[i].onclick = function(){
				clearInterval(timer);
				
				changeBtn(aUl,aBtn,this.index);
			}
		}

		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onclick = function(){

				oImg.src = "images/"+(this.index+1)+".jpg" ;
			}
		}

		 timer = setInterval(function(){
		 	m=m>8? 1:m;
		 	if(m<=4){
		 		n=0;
		 	}else{
		 		n=1;
		 	}
		 	changeBtn(aUl,aBtn,n);

		 	for(var j=0;j<aLi.length;j++){
					aUl[j%2].style.display = 'none';
					aLi[j].style.backgroundColor = '#F0F8FF';
				}

				aUl[n].style.display ='inline-block';
				aLi[m-1].style.backgroundColor = 'yellow';
				oImg.src = "images/"+m+".jpg" ;
			m++;
		 },1000);
	
}

function changeBtn(abj1,abj2,index){
	for(var j=0;j<abj1.length;j++){
					abj1[j].style.display = 'none';
					abj2[j].style.backgroundColor = '#35E7F9';
				}
				abj1[index].style.display = 'inline-block';
				abj2[index].style.backgroundColor = 'blue';

		
}