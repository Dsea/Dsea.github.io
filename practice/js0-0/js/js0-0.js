window.onload = function(){
	var oDemo = document.getElementById('demo'),
		oBtn = document.getElementById("btn");
		oShow =getByClass('show')[0],
		oShowDiv=document.getElementById("showDiv"),
		oSetBox =document.getElementById("setBox"),
		aBtn = oSetBox.getElementsByTagName("button"),
		aIpt = oSetBox.getElementsByTagName("input");

	var aColor =['red','yellow','blue'];
	var aWihe =["200px","300px","400px"];
	var that;
//弹窗
	oBtn.onclick = function(){
		oSetBox.style.display = "block";
		oShow.style.opacity = 0.5;
		oShow.style.backgroundColor="#EAE8E8";
	}

//颜色控制
	for(var i=0;i<3;i++){
		aBtn[i].index=i;
		aBtn[i].onclick = function(){

			oShowDiv.style.backgroundColor = aColor[this.index];
		}
	}
//宽度控制
	for(var i=3;i<6;i++){
		aBtn[i].index=i;
		aBtn[i].onclick = function(){

			oShowDiv.style.width = aWihe[this.index-3];
		}
	}
//高度控制
	for(var i=6;i<9;i++){
		aBtn[i].index=i;
		aBtn[i].onclick = function(){

			oShowDiv.style.height = aWihe[this.index-6];
		}
	}
//确定按钮
	for(var i in aIpt){

		aIpt[0].onclick = function (){
			oShowDiv.style.width = "200px";
			oShowDiv.style.height= "200px";
			oShowDiv.style.backgroundColor ='none';
			oShow.style.opacity = 1;
			oShow.style.backgroundColor='';
		}
		aIpt[1].onclick = function(){
			oSetBox.style.display = "none";
			oShow.style.opacity = 1;
			oShow.style.backgroundColor='#057D89';
		}
	}


}

// 获取class
function getByClass(sClass){
	var reasult=[],
		op=null;
	op=document.getElementsByTagName("*");
	for(var i in op){
		if(op[i].className==sClass){
			reasult.push(op[i])
		}
		
	}
	return reasult;
}