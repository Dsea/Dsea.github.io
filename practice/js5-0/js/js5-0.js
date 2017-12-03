window.onload = function(){
	var oDemo = document.getElementById('demo'),
		oTab  = document.getElementById('tab'),
		aInput= oTab.getElementsByTagName('input'),
		oResult=document.getElementById('Result'),
		aSpan = oResult.getElementsByTagName('span');

		for(var i=0;i<aInput.length;i++){
			var sum =0;
			var num=0;
			var max =0;
			aInput[i].index=i;
			oTab.rows[i].cells[2].index=0
			aInput[i].onblur = function(){

				if(this.value>0){
					num++;
				}
				max=max>(parseFloat(oTab.rows[this.index+1].cells[2].innerHTML))? max:(parseFloat(oTab.rows[this.index+1].cells[2].innerHTML));
			

			
				oTab.rows[this.index+1].cells[4].innerHTML=(parseFloat(oTab.rows[this.index+1].cells[2].innerHTML)*parseFloat(this.value)).toFixed(1);

				sum+=parseFloat(oTab.rows[this.index+1].cells[4].innerHTML);
				aSpan[0].innerHTML = num;
				aSpan[1].innerHTML = sum.toFixed(1);
				aSpan[2].innerHTML = max;
			}

			oTab.rows[i].cells[2].onclick = function(){

				this.innerHTML=prompt("确定修改"+oTab.rows[this.index+1].cells[1].innerHTML+"的单价为:",'')
			}

		}


}
//数组求和
