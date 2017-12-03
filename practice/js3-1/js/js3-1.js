window.onload = function(){
	var oDemo = document.getElementById('demo'),
		

		oShow = document.getElementById('show'),
		oImg  = oShow.getElementsByTagName('img')[0],
		oSpan = oShow.getElementsByTagName('span');

		oCon  = document.getElementById('contrl'),
	   	aLi   = oCon.getElementsByTagName('li'),

		oThum = document.getElementById('thum'),
		
		arr=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg",];

		var changeBtn= new	changeImg(oImg,oDemo,aLi,arr);

		//左右按钮样式 变换
		for(var i=0;i<oSpan.length;i++){
			oSpan[i].onmouseover = function(){
				this.style.opacity=1;
			}
			oSpan[i].onmouseout = function(){
				this.style.opacity=0.5;
			}
		}
		//左右按钮点击
		
		oSpan[0].onclick = function(){
				changeBtn.clicSpanL();
		}
		oSpan[1].onclick = function(){
				changeBtn.clicSpanR();
		}
		//列表切换图片;
		for(var i=0;i<aLi.length;i++){
			aLi[i].onclick = function(){
				for(var j=0;j<aLi.length;j++){
					aLi[j].style.backgroundColor="#30CEDA";
				}
				this.style.backgroundColor ='yellow';
				changeBtn.clicLi();
			}
			//缩略图
			aLi[i].fall=i;
			aLi[i].onmouseover=function(){
				oThum.style.display = 'block';
				oThum.style.left = this.offsetLeft-25+'px';
				oThum.style.backgroundImage = "url("+arr[this.fall]+")";
				
			}
			aLi[i].onmouseout = function(){
					oThum.style.display ='none';
				}

		}

}

function changeImg(obj,obj1,abj,aSrc){
	this.index = 0;
	this.obj=obj;
	this.obj1=obj1;
	this.abj=abj;
	this.aSrc=aSrc;

	this.clicSpanL=function(){

			this.index--;
			this.index=this.index<0? (this.aSrc).length-1:this.index;
	
		this.clicSpan();
		
	}

	this.clicSpanR=function(){

			this.index++;
			this.index=this.index>(this.aSrc).length-1? 0:this.index;
	
			this.clicSpan();
		
	}
	this.clicSpan=function(){

		for(var i=0;i<(this.abj).length;i++){
			this.abj[i].style.backgroundColor='#30CEDA';
		}


		this.obj.src = (this.aSrc)[this.index];

		(this.abj)[this.index].style.backgroundColor = 'yellow';
		
		(this.obj1).style.backgroundImage = "url("+(this.aSrc)[this.index]+")";
	}

	this.clicLi=function(){
		
		for(this.index=0;this.index<(this.abj).length;this.index++){
			if((this.abj[this.index])['style']['backgroundColor']=='yellow'){
				this.clicSpan();
			}
		}
	}

}