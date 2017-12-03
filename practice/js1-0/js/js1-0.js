window.onload = function(){
	var oShow = document.getElementById("show"),
		oSet  = document.getElementById("set"),
		aImg  = oSet.getElementsByTagName("span"),
		oIpt  = oSet.getElementsByTagName("input")[0],
		oSend = oSet.getElementsByTagName("button")[0],
		onOff =true;

		//图片选择

		aImg[0].onclick = function(){
			this.style.display     = 'none';
			aImg[1].style.display  = 'block';
			onOff = false;
		}

		aImg[1].onclick = function(){
			this.style.display    = "none";
			aImg[0].style.display = "block";
			onOff = true;
		}

       //点击发送按钮后

       oSend.onclick =function(){
       	var oTxt   = oIpt.value,
       		oDivBox   = document.createElement("div"),
       		oP     = document.createElement("p"),
       		oSpan  = document.createElement("span"),
                     oDiv   =document.createElement('div');

       		oDivBox.className  = "oBox";
       		oP.innerHTML    = oTxt;
                     
       		if(onOff){
       			oSpan.className = "setImg spanLeft";
       			oP.className    = "oP opLeft";
                            oDiv.className    = 'direL';

       		}else{
       			oSpan.className = "setImg spanRight";
       			oP.className    = "oP  opRight";
                            oDiv.className    = 'direR';
       		}
                    oP.appendChild(oDiv);

       		oDivBox.appendChild(oP);
       		oDivBox.appendChild(oSpan);
       		oShow.appendChild(oDivBox);

       }

       



}