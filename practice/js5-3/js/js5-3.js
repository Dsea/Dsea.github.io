window.onload = function(){
	var oDemo = document.getElementById('demo'),
		oDemoL = document.getElementById('demoLeft');
		aLiLeft = oDemoL.getElementsByTagName('li'),
		aDiv = oDemo.getElementsByTagName('div');
	var	aLi=[];
	var aImg =[];
		for(var i=0;i<aDiv.length;i++){
			aLi[i]=aDiv[i].getElementsByTagName('li');
			aImg[i]=aDiv[i].getElementsByTagName('img');
		}
	

	
	rotaion(aLiLeft,aDiv,{'backgroundColor':'#DEDCDC'},'white');
	for(var i=0;i<4;i++){
		rotaion(aLi[i],aImg[i],{'opacity':0.6},1);
	}
	
	

}
function rotaion(abj,abj2,json,str){
	for(var attr in json){

		for(var i=0;i<abj.length;i++){
			abj[i].index =i;
			abj[i].onclick = function(){
				for(var j=0;j<abj.length;j++){
					abj[j]['style'][attr] =json[attr];
					abj2[j].style.display ='none';
				}
				this['style'][attr] =str;
				abj2[this.index].style.display ='block';
				
			}
		}
	}
}
