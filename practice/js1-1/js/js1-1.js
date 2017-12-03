window.onload = function(){
	var oDemo  =  document.getElementById("demo"),
		aBtn   =  oDemo.getElementsByTagName("button"),
		oP     =oDemo.getElementsByTagName("p");
		oDemoShow =document.getElementById("demoShow"),
		aDiv   =  oDemoShow.getElementsByTagName("div"),
		oSpan  =  oDemoShow.getElementsByTagName('span'),
		Swch = new transImg(oP,aDiv,'left');


		//按钮的效果
		for(var i=0;i<aBtn.length;i++){
			oSpan[i].onmouseover = function(){
				this.style.color='red';
				this.style.opacity=1;
			}
			oSpan[i].onmouseout = function(){
				this.style.color='black';
				this.style.opacity=0.6;
			}
		}

		//图片切换方式是否循环
		aBtn[0].onclick = function(){
			Swch.judge1();
		}

		aBtn[1].onclick = function(){
			Swch.judge2();
		}

		//图片切换
		//左按钮切换
		
		oSpan[0].onclick = function(){
			
			Swch.leftSwitch();
		}

		oSpan[1].onclick = function(){
			Swch.rightSwitch();
		}

	
		

}
//----------------------------------------

function transImg(abj1,abj2,dire){
	this.abj1=abj1;
	this.abj2=abj2;
	this.dire=dire;
	this.onOff=true;
	this.index=0;
	this.judge1=function(){
		this.onOff = true;
		this.abj1[0]['style']['display'] ='none';
		this.abj1[1]['style']['display'] ='block';
	}
	this.judge2=function(){
		this.onOff = false;
		this.abj1[1]['style']['display'] ='none';
		this.abj1[0]['style']['display'] ='block';
	}

	this.leftSwitch=function(){

		for(var i=0;i<(this.abj2).length;i++){
			this.abj2[i]['style']['display'] = 'none';
		}

		if(this.onOff){
			
				this.index--;
				this.index=this.index<0? (this.abj2).length-1:this.index;

		}else{
				this.index--;

				if(this.index<0){
					this.index=0;
					alert("已经是里左边一张了");
				}

		}

		(this.abj2[this.index])['style']['display'] = 'block';
		

	}
	this.rightSwitch=function(){

		for(var i=0;i<(this.abj2).length;i++){
			this.abj2[i]['style']['display'] = 'none';
		}

		if(this.onOff){
			
				this.index++;
				this.index=this.index>(this.abj2).length-1?   0:this.index;

		}else{
				this.index++;

				if(this.index>(this.abj2).length-1){
					this.index=(this.abj2).length-1;
					alert("已经是里右边一张了");
				}

		}

		(this.abj2[this.index])['style']['display'] = 'block';
		

	}

}



































