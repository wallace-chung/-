window.onload=function(){
	var dropdown=document.getElementsByTagName("div")[0],
	    btn=document.getElementById("dropdownToggle"),
	    span=document.getElementsByTagName("span"),
	    dropdownMenu=document.getElementById("dropdownMenu"),
	    li=document.getElementsByTagName("li"),
	    a=document.getElementsByTagName("a"),
	    flog=0;

	btn.onclick=function(){
		if(flog==0){
	        dropdown.classList.add("open");
	        flog=1;
	    } else {
	    	dropdown.classList.remove("open");
	    	flog=0;
	    }
	}
    
    for(var i=0;i<li.length;i++){
    	li[i].onclick=function(){
    		for(var i=0;i<li.length;i++){
    			li[i].classList.add("active");
    			btn.replaceChild(li[i],btn.childNodes[0]);
    		}   				
    	}
    }
	

}