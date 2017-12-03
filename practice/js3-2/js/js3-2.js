window.onload = function(){

	var oDemo = document.getElementById('demo'),
		aImg  = oDemo.getElementsByTagName('img'),
		aBtn  =	oDemo.getElementsByTagName('button'),
		picrot = new changeImg(aImg);

		// 图片点击转换
		aImg[0].onclick = function(){
			picrot.transImgL();
		}
		aImg[1].onclick = function(){
			picrot.transImgR();
		}
		//按钮点击组转换
		aBtn[0].onclick = function(){
			picrot.transBtnL();
		}
		aBtn[1].onclick = function(){
			picrot.transBtnR();
		}
		


}

function changeImg(abj){
	this.abj = abj;
	this.index = 0;
	this.order = 0;
	this.onOff = true;
	

	
	this.transImgL = function(){
		if(this.onOff){
			this.index++;
		}else{
			this.index--;
		}
		
		this.index=this.index<0? 6:this.index;
		this.index=this.index>6? 0:this.index;

		this.abj[0].src = "images/timg ("+this.index+").jpg";
	}
	this.transImgR = function(){
		if(this.onOff){
			this.order++;
		}else{
			this.order--;
		}
		
		this.order=this.order<0? 4:this.order;
		this.order=this.order>4? 0:this.order;
		
		this.abj[1].src = "images/Spirit ("+this.order+").jpg";
	}

	this.transBtnR = function(){
		this.onOff = true;
		this.transImgR();
		this.transImgL();
	}
	this.transBtnL = function(){
		this.onOff = false;

		this.transImgR();
		this.transImgL();

	}
}	