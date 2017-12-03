window.onload = function(){
	var oBox = document.getElementById('box'),
		aImg = document.getElementsByTagName('img');
	
		for(var i=0;i<aImg.length;i++){
			aImg[i].style.left =i*123+'px';
		}

		setInterval(function(){
			var oDate = new Date();
			var oHours=addZero(parseInt(oDate.getHours()));
			var oMinutes =addZero(parseInt(oDate.getMinutes()));
			var oSeconds =addZero(parseInt(oDate.getSeconds()));

			

				aImg[0].src="images/"+oHours[0]+".JPG";
				aImg[1].src ="images/"+oHours[1]+".JPG";
				aImg[3].src ="images/"+oMinutes[0]+".JPG";
				aImg[4].src ="images/"+oMinutes[1]+".JPG";
				aImg[6].src ="images/"+oSeconds[0]+".JPG";
				aImg[7].src ="images/"+ oSeconds[1]+".JPG";

		},100);
}
function addZero(num){
	if(num<10){
		num='0'+num.toString();
	}else{
		num = num.toString();
	}
	return num;
}