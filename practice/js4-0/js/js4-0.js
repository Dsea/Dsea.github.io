window.onload = function(){

	var	aBtn   = document.getElementsByTagName('button'),
		aSpan  = document.getElementsByTagName('span')
		
		

	var arr = [ '100px', 'abc'-6, [], -98765, 34, -2, 0, '300', , function(){alert(1);}, null, document, [], true, '200px'-30,'23.45元', 5, Number('abc'), function(){ alert(3); }, 'xyz'-90 ];
	
	var useNum = new useSearch(arr,aSpan);

		aBtn[0].onclick = function(){
			useNum.isNumbe();
		}
		aBtn[1].onclick =function(){
			useNum.transNumbe();
		}
		aBtn[2].onclick =function(){
			useNum.bigNumbe();
		}
		aBtn[3].onclick =function(){
			useNum.findIndex();
		}

}
function useSearch(arr,abj){

	this.arr  = arr;
	this.index = 0;
	this.abj   = abj;
	

	this.judge = function(){
		this.arrisNum=[];
		this.arrtransNum=[];
		this.bigNum = []
		this.arrIndex =[];
		for(var i=0;i<this.arr.length;i++){

			if(parseFloat(this.arr[i])===this.arr[i]){
				this.arrisNum.push(this.arr[i]);
			}

			if(!isNaN(parseFloat(this.arr[i]))){
				this.arrtransNum.push(this.arr[i]);
				this.bigNum.push(parseFloat(this.arr[i]));
			}

			if(isNaN(this.arr[i])){
				this.arrIndex.push(i);
			}
		}
	}


	this.isNumbe = function(){
		this.judge();
		this.abj[0].innerHTML='';
		this.abj[0].innerHTML=this.arrisNum;

	}


	this.transNumbe = function(){
		this.judge();
		this.abj[1].innerHTML='';
		this.abj[1].innerHTML=this.arrtransNum;
	}

	

	this.bigNumbe = function(){
		this.judge();
		this.abj[2].innerHTML='';
		this.bigNum.sort(function(a,b){return b-a});
		this.abj[2].innerHTML = this.bigNum[0];

		
	}

	this.findIndex = function(){
		this.judge();
		this.abj[3].innerHTML  = '';
		this.abj[3].innerHTML  =this.arrIndex;
	}
}