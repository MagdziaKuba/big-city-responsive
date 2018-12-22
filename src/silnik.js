var hamburger=document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
	document.querySelector(".ul_hamburger").classList.toggle("close");
	document.querySelector(".hamburger").classList.toggle("open");
},false);