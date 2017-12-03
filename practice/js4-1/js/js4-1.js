window.onload = function(){
	var oDemo = document.getElementById('demo'),
		aInput = oDemo.getElementsByTagName('input'),
		aSpan  = oDemo.getElementsByTagName('span'),
		oP     = oDemo.getElementsByTagName('p');

		for(var i=0;i<aInput.length-1;i++){
			aInput[i].index=i;
			aInput[i].onclick = function(){
				this.value='';
			}

			aInput[i].onfocus =function(){
				for(var i=0;i<oP.length;i++){
					oP[i].innerHTML = '';
					this.style.color='#0C1036';
				}
			}

			
		}

		aInput[0].onblur = function(){

			if(this.value==''){
				oP[0].innerHTML = "QQ号码不能为空 ：";
			}
			else if(!(parseFloat(this.value)==this.value)){
				oP[0].innerHTML = '输入的QQ号必须为数字 :';
			}
			else if(this.value[0]==0){
				oP[0].innerHTML = "第一个数字不能为0  ：";
			}
			else if(!(parseFloat(this.value)==parseInt(this.value))){
				oP[0].innerHTML = '输入的数字不能为小数  ：';
			}
			else if(this.value.length<5||this.value.length>10){
				oP[0].innerHTML = '必须是大于5位，小于10位的数字 ：';
			}

		}
		




}

