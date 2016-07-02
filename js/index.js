$(function(){

var $box=$(".banner-left");
var $imgs=$(".imgbox");
var $leftbtn=$(".btn-left");
var $rightbtn=$(".btn-right");
var $lens=$imgs.length;
var now=0;
var next=0;
var $flag=true;
var time=2000; 
for(var j=1;j<=$lens;j++){
	if(j==1){
		var $str="<span class='actives'>"+j+"</span>"
	}else{
		var $str="<span>"+j+"</span>"
	}
	$(".anniu-box").append($str);
}
var $lists=$(".anniu-box span");
$imgs.css({left:"100%"}).eq(0).css({left:0});
function move(type){
	if(!$flag){return;}
	$flag=false;
	if(type=="r"){
		next++
		if(next>=$lens){
			next=0;
		}
		$imgs.eq(next).css({left:"100%"});
		$imgs.eq(now).animate({left:"-100%"},600,function(){
			$flag=true;
		});
		$imgs.eq(next).animate({left:"0"},600);
	}
	if(type=="l"){
      	next--;
        if(next<0){
      	 	next=$lens-1;
      	}
      	$imgs.eq(next).css({left:"-100%"});
        $imgs.eq(now).animate({left:"100%"},600,function(){
         	$flag=true;
        });
        $imgs.eq(next).animate({left:"0"},600);
      	}
	$lists.eq(now).removeClass("actives");
    $lists.eq(next).addClass("actives");
	now=next;
}

var t=setInterval(function(){move("r")},2000);

$box.hover(function(){
	clearInterval(t)
},function(){
	t=setInterval(function(){move("r")},time);
})


$lists.click(function(){
	if(!$flag){return;};
      	$flag=false;
      	var index=$(this).index();
      	if(now==index){return;}
      	if(index>now){
      	 $imgs.eq(now).animate({left:"-100%"},600);
      	 $imgs.eq(index).css({"left":"100%"}).animate({left:0},600,function(){
      		$flag=true;
      	});
        }else{
      	$imgs.eq(now).animate({left:"100%"},600);
      	$imgs.eq(index).css({"left":"-100%"}).animate({left:0},600,function(){
      		$flag=true;
      	});
        }
      	$lists.eq(now).removeClass("actives");
         $lists.eq(index).addClass("actives");
	next=now=index;
})


$rightbtn.click(function(){
	move("r");
})
$leftbtn.click(function(){
	move("l");
})

})




/********************************************/


$(".back").click(function(){
	alert($(".back").length)
	var dd=document.body.scrollTop?document.body:document.documentElement;
	animate(dd,{scrollTop:0},300,Tween.Linear)
})