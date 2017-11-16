window.onload=function(){
	var dropdown=document.getElementsByTagName("div")[0];  console.log(dropdown);
	var btn=document.getElementById("dropdownToggle"),
	    dropdownMenu=document.getElementById("dropdownMenu"),
	    li=document.getElementsByTagName("li"),
	    span=document.getElementsByTagName("span"),
	    a=document.getElementsByTagName("a"),
	    flog=0;
  
	btn.onclick=function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		} else {
			event.cancelBubble()=true;
		};
		if(flog==0){
	        dropdown.classList.add("open");
	        flog=1;
	    } else {
	    	dropdown.classList.remove("open");
	    	flog=0;
	    }
	}
   
    document.onclick=function(){
    	dropdown.classList.remove("open");
    	flog=0;
    }
    

    for(var i=0;i<li.length;i++){
    	li[i].onclick=function(){
    		for(var i=0;i<li.length;i++){
    			li[i].classList.remove("active");
    			this.classList.add("active");
    			span[0].innerHTML=this.lastChild.value;
    		}
    		
    		
    	}
    }

}