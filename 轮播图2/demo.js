(function(){
	var boxAll=document.querySelector(".box");
	var list=document.querySelector(".box-list");
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var time;

    function animate(num){
    	var newLeft=parseInt(list.style.left) + num;
        list.style.left=newLeft + 'px';
        // if(newLeft=0){
        // 	setTimeout(function(){
        //     	list.classList.remove("animate");
        //     },1000) 
        // }
        if(newLeft>-500){ 
        	setTimeout(function(){
        		list.style.left=-2500 + "px";
            	list.classList.remove("animate");
            },400) 
            
        }
        if(newLeft<-2000){
            setTimeout(function(){
            	list.style.left=0 + "px";
            	list.classList.remove("animate");
            },400)	
        }
        else{
        	list.classList.add("animate");
        }
    }
      
    prev.onclick=function(){
    	animate(500);
    }
    next.onclick=function(){
    	animate(-500);
    }
    function activity(){
		time=setInterval(function(){
			animate(-500);
		}, 3000);
	}
	activity();
	function stop(){
		clearInterval(time);
	}
	boxAll.onmouseover=stop;
	boxAll.onmouseout=activity;



})();