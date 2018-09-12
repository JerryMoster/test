var btn=document.getElementById("btn")
var nav=document.getElementsByClassName("nav")
bool=true
btn.onclick=function(){
	if(bool){
		nav.style.display="none";
		bool=false
	}else{
		nav.style.display="block";
		bool=true
	}
}
