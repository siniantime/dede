/* item scroll*/
 function AutoScroll(obj) {
     $(obj).find("ul:first").animate({
      marginTop: "-22px"}, 500, function() {
     $(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);}); }
 $(document).ready(function() {
 var myar = setInterval('AutoScroll(".scrollDiv")', 2000)
 $(".scrollDiv").hover(function() { clearInterval(myar); }, function() { myar = setInterval('AutoScroll(".scrollDiv")', 2000) }); //当鼠标放上去的时候，滚动停止，鼠标离开的时候滚动开始，-22px是行高
        });
		$(document).ready(function() {
 var myar = setInterval('AutoScroll(".scrollDiv1")', 4000)
 $(".scrollDiv1").hover(function() { clearInterval(myar); }, function() { myar = setInterval('AutoScroll(".scrollDiv1")', 4000) }); //当鼠标放上去的时候，滚动停止，鼠标离开的时候滚动开始，-22px是行高
        });
/* item scroll end*/		

jQuery.extend({
	 '_hide' : function()
  		{
   			//$("#select_list").hide();
			$('#select_list').css('display','none');
  		},
	'_display'       : function()
		{
			$('#select_list').css('display','block');	
		}

	});

//年代切换
function tabChange(obj,id)
{
 var arrayli = obj.parentNode.getElementsByTagName("li"); //获取li数组
 var arrayul = document.getElementById(id).getElementsByTagName("ul"); //获取ul数组
 for(i=0;i<arrayul.length;i++)
 {
  if(obj==arrayli[i])
  {
   arrayli[i].className = "cli";
   arrayul[i].className = "";
  }
  else
  {
   arrayli[i].className = "";
   arrayul[i].className = "hidden";
  }
 }
}

//年代切换背景色
$(function(){
	$(".look_year li ").click(function(){
		$(this).css("background","url()").siblings("li").css("background","url()");
	})
});


$(document).ready(function(){
$('.links>dl>dt:first').addClass('active');
$('.links>dl>dd:first').css('display','block');
autoroll();
hookThumb();
});
var i=-1; //第i+1个tab开始
var offset = 90000; //轮换时间
var timer = null;
function autoroll(){
n = $('.links>dl>dt').length-1;
i++;
if(i > n){
i = 0;
}
slide(i);
timer = window.setTimeout(autoroll, offset);
}
function slide(i){
$('.links>dl>dt').eq(i).addClass('active').siblings().removeClass('active');
$('.links>dl>dd').eq(i).css('display','block').siblings('dd').css('display','none');
}
function hookThumb(){
$('.links>dl>dt').hover(
function () {
if (timer) {
clearTimeout(timer);
i = $(this).prevAll().length;
slide(i);
}
},
function () {
timer = window.setTimeout(autoroll, offset);
this.blur();
return false;
}
);
}


$(document).ready(function(){
$('.tabbox>dl>dt:first').addClass('active');
$('.tabbox>dl>dd:first').css('display','block');
autoroll2();
hookThumb2();
});
var i2=-1; //第i+1个tab开始
var offset2 = 10000; //轮换时间
var timer2 = null;
function autoroll2(){
n2 = $('.tabbox>dl>dt').length-1;
i2++;
if(i2 > n2){
i2 = 0;
}
slide2(i2);
timer2 = window.setTimeout(autoroll2, offset2);
}
function slide2(i){
$('.tabbox>dl>dt').eq(i).addClass('active').siblings().removeClass('active');
$('.tabbox>dl>dd').eq(i).css('display','block').siblings('dd').css('display','none');
}
function hookThumb2(){
$('.tabbox>dl>dt').hover(
function () {
if (timer2) {
clearTimeout(timer2);
i = $(this).prevAll().length;
slide2(i);
}
},
function () {
timer2 = window.setTimeout(autoroll2, offset2);
this.blur();
return false;
}
);
}


function H$(i) {return document.getElementById(i)}
function H$$(c, p) {return p.getElementsByTagName(c)}
var slider = function () {
 function init (o) {
  this.id = o.id;
  this.at = o.auto ? o.auto : 3;
  this.o = 0;
  this.pos();
 }
 init.prototype = {
  pos : function () {
   clearInterval(this.__b);
   this.o = 0;
   var el = H$(this.id), li = H$$('li', el), l = li.length;
   var _t = li[l-1].offsetHeight;
   var cl = li[l-1].cloneNode(true);
   cl.style.opacity = 0; cl.style.filter = 'alpha(opacity=0)';
   el.insertBefore(cl, el.firstChild);
   el.style.top = -_t + 'px';
   this.anim();
  },
  anim : function () {
   var _this = this;
   this.__a = setInterval(function(){_this.animH()}, 20);
  },
  animH : function () {
   var _t = parseInt(H$(this.id).style.top), _this = this;
   if (_t >= -1) {
    clearInterval(this.__a);
    H$(this.id).style.top = 0;
    var list = H$$('li',H$(this.id));
    H$(this.id).removeChild(list[list.length-1]);
    this.__c = setInterval(function(){_this.animO()}, 20);
    //this.auto();
   }else {
    var __t = Math.abs(_t) - Math.ceil(Math.abs(_t)*.5);
    H$(this.id).style.top = -__t + 'px';
   }
  },
  animO : function () {
   this.o += 2;
   if (this.o == 100) {
    clearInterval(this.__c);
    H$$('li',H$(this.id))[0].style.opacity = 1;
    H$$('li',H$(this.id))[0].style.filter = 'alpha(opacity=100)';
    this.auto();
   }else {
    H$$('li',H$(this.id))[0].style.opacity = this.o/100;
    H$$('li',H$(this.id))[0].style.filter = 'alpha(opacity='+this.o+')';
   }
  },
  auto : function () {
   var _this = this;
   this.__b = setInterval(function(){_this.pos()}, this.at*1000);
  }
 }
 return init;
}();







var Speed_1 = 10; //速度(毫秒)
var Space_1 = 20; //每次移动(px)
var PageWidth_1 = 125 * 3; //翻页宽度
var interval_1 = 5000; //翻页间隔
var fill_1 = 0; //整体移位
var MoveLock_1 = false;
var MoveTimeObj_1;
var MoveWay_1="right";
var Comp_1 = 0;
var AutoPlayObj_1=null;
function GetObj(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}}
function AutoPlay_1(){clearInterval(AutoPlayObj_1);AutoPlayObj_1=setInterval('ISL_GoDown_1();ISL_StopDown_1();',interval_1)}
function ISL_GoUp_1(){if(MoveLock_1)return;clearInterval(AutoPlayObj_1);MoveLock_1=true;MoveWay_1="left";MoveTimeObj_1=setInterval('ISL_ScrUp_1();',Speed_1);}
function ISL_StopUp_1(){if(MoveWay_1 == "right"){return};clearInterval(MoveTimeObj_1);if((GetObj('ISL_Cont_1').scrollLeft-fill_1)%PageWidth_1!=0){Comp_1=fill_1-(GetObj('ISL_Cont_1').scrollLeft%PageWidth_1);CompScr_1()}else{MoveLock_1=false}
AutoPlay_1()}
function ISL_ScrUp_1(){if(GetObj('ISL_Cont_1').scrollLeft<=0){GetObj('ISL_Cont_1').scrollLeft=GetObj('ISL_Cont_1').scrollLeft+GetObj('List1_1').offsetWidth}
GetObj('ISL_Cont_1').scrollLeft-=Space_1}
function ISL_GoDown_1(){clearInterval(MoveTimeObj_1);if(MoveLock_1)return;clearInterval(AutoPlayObj_1);MoveLock_1=true;MoveWay_1="right";ISL_ScrDown_1();MoveTimeObj_1=setInterval('ISL_ScrDown_1()',Speed_1)}
function ISL_StopDown_1(){if(MoveWay_1 == "left"){return};clearInterval(MoveTimeObj_1);if(GetObj('ISL_Cont_1').scrollLeft%PageWidth_1-(fill_1>=0?fill_1:fill_1+1)!=0){Comp_1=PageWidth_1-GetObj('ISL_Cont_1').scrollLeft%PageWidth_1+fill_1;CompScr_1()}else{MoveLock_1=false}
AutoPlay_1()}
function ISL_ScrDown_1(){if(GetObj('ISL_Cont_1').scrollLeft>=GetObj('List1_1').scrollWidth){GetObj('ISL_Cont_1').scrollLeft=GetObj('ISL_Cont_1').scrollLeft-GetObj('List1_1').scrollWidth}
GetObj('ISL_Cont_1').scrollLeft+=Space_1}
function CompScr_1(){if(Comp_1==0){MoveLock_1=false;return}
var num,TempSpeed=Speed_1,TempSpace=Space_1;if(Math.abs(Comp_1)<PageWidth_1/2){TempSpace=Math.round(Math.abs(Comp_1/Space_1));if(TempSpace<1){TempSpace=1}}
if(Comp_1<0){if(Comp_1<-TempSpace){Comp_1+=TempSpace;num=TempSpace}else{num=-Comp_1;Comp_1=0}
GetObj('ISL_Cont_1').scrollLeft-=num;setTimeout('CompScr_1()',TempSpeed)}else{if(Comp_1>TempSpace){Comp_1-=TempSpace;num=TempSpace}else{num=Comp_1;Comp_1=0}
GetObj('ISL_Cont_1').scrollLeft+=num;setTimeout('CompScr_1()',TempSpeed)}}
function picrun_ini(){
GetObj("List2_1").innerHTML=GetObj("List1_1").innerHTML;
GetObj('ISL_Cont_1').scrollLeft=fill_1>=0?fill_1:GetObj('List1_1').scrollWidth-Math.abs(fill_1);
GetObj("ISL_Cont_1").onmouseover=function(){clearInterval(AutoPlayObj_1)}
GetObj("ISL_Cont_1").onmouseout=function(){AutoPlay_1()}
AutoPlay_1();
}














$(function(){
	$(".select_sim a").click(function(e){
		e.preventDefault();
		$(this).parent().find("ul").toggle();
		window.setTimeout("method('nvul')",5000);
	});
	
	$(".select_sim li").click(function(){
		var _text= $(this).text();
		$(this).parent().hide().siblings("span").text(_text);
	});
$(function(){
	$(".nav").parent().mouseover(function(){
		$(this).find(".hide").show();
		var _index=$(this).index()+1;
		$(this).find(".nav").addClass("nav_0"+_index+"_on");
	}).mouseout(function(){
		$(this).find(".hide").hide();
		var _index=$(this).index()+1;
		$(this).find(".nav").removeClass("nav_0"+_index+"_on");
	});
});	
	
	
});

function checkKeywords(){
	var keywords=window.document.formsearch.q.value;
	if(keywords==''||keywords=='请输入关键词...'){
		window.document.formsearch.q.focus();
		alert('搜索关键字不能为空！');
		return false;
		}
	else{
			return true;
		}

	}
	


//代码开始
function writeflashhtml( arg )
{
var parm = []
var _default_version = "8,0,24,0";
var _default_quality = "high";
var _default_align = "middle";
var _default_menu = "false";

for(i = 0; i < arguments.length; i ++)
{
parm[i] = arguments[i].split(' ').join('').split('=')
for (var j = parm[i].length-1; j > 1; j --){
parm[i][j-1]+="="+parm[i].pop();
}
switch (parm[i][0])
{
case '_version' : var _version = parm[i][1] ; break ; 
case '_swf' : var _swf = parm[i][1] ; break ; 
case '_base' : var _base = parm[i][1] ; break ; 
case '_quality' : var _quality = parm[i][1] ; break ; 
case '_loop' : var _loop = parm[i][1] ; break ; 
case '_bgcolor' : var _bgcolor = parm[i][1] ; break ; 
case '_wmode' : var _wmode = parm[i][1] ; break ; 
case '_play' : var _play = parm[i][1] ; break ; 
case '_menu' : var _menu = parm[i][1] ; break ; 
case '_scale' : var _scale = parm[i][1] ; break ; 
case '_salign' : var _salign = parm[i][1] ; break ; 
case '_height' : var _height = parm[i][1] ; break ; 
case '_width' : var _width = parm[i][1] ; break ; 
case '_hspace' : var _hspace = parm[i][1] ; break ; 
case '_vspace' : var _vspace = parm[i][1] ; break ; 
case '_align' : var _align = parm[i][1] ; break ; 
case '_class' : var _class = parm[i][1] ; break ; 
case '_id' : var _id = parm[i][1] ; break ; 
case '_name' : var _name = parm[i][1] ; break ; 
case '_style' : var _style = parm[i][1] ; break ; 
case '_declare' : var _declare = parm[i][1] ; break ; 
case '_flashvars' : var _flashvars = parm[i][1] ; break ; 
default :;
}
}
var thtml = ""
thtml += "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=" + ((_version)?_version:_default_version) + "'"
if(_width) thtml += " width='" + _width + "'"
if(_height) thtml += " height='" + _height + "'"
if(_hspace) thtml += " hspace='" + _hspace + "'"
if(_vspace) thtml += " vspace='" + _vspace + "'"
if(_align) thtml += " align='" + _align + "'"
else thtml += " align='" + _default_align + "'"
if(_class) thtml += " class='" + _class + "'"
if(_id) thtml += " id='" + _id + "'"
if(_name) thtml += " name='" + _name + "'"
if(_style) thtml += " style='" + _style + "'"
if(_declare) thtml += " " + _declare
thtml += ">"
if(_swf) thtml += "<param name='movie' value='" + _swf + "'>"
if(_quality) thtml += "<param name='quality' value='" + _quality + "'>" 
else thtml += "<param name='quality' value ='" + _default_quality + "'>"
if(_loop) thtml += "<param name='loop' value='" + _loop + "'>"
if(_bgcolor) thtml += "<param name='bgcolor' value='" + _bgcolor + "'>"
if(_play) thtml += "<param name='play' value='" + _play + "'>"
if(_menu) thtml += "<param name='menu' value='" + _menu + "'>"
else thtml += "<param name='menu' value='" + _default_menu + "'>"
if(_scale) thtml += "<param name='scale' value='" + _scale + "'>"
if(_salign) thtml += "<param name='salign' value='" + _salign + "'>"
if(_wmode) thtml += "<param name='wmode' value='" + _wmode + "'>"
if(_base) thtml += "<param name='base' value='" + _base + "'>"
if(_flashvars) thtml += "<param name='flashvars' value='" + _flashvars + "'>"
thtml += "<embed pluginspage='http://www.macromedia.com/go/getflashplayer'"
if(_width) thtml += " width='" + _width + "'"
if(_height) thtml += " height='" + _height + "'"
if(_hspace) thtml += " hspace='" + _hspace + "'"
if(_vspace) thtml += " vspace='" + _vspace + "'"
if(_align) thtml += " align='" + _align + "'"
else thtml += " align='" + _default_align + "'"
if(_class) thtml += " class='" + _class + "'"
if(_id) thtml += " id='" + _id + "'"
if(_name) thtml += " name='" + _name + "'"
if(_style) thtml += " style='" + _style + "'"
thtml += " type='application/x-shockwave-flash'"
if(_declare) thtml += " " + _declare 
if(_swf) thtml += " src='" + _swf + "'"
if(_quality) thtml += " quality='" + _quality + "'"
else thtml += " quality='" + _default_quality + "'"
if(_loop) thtml += " loop='" + _loop + "'"
if(_bgcolor) thtml += " bgcolor='" + _bgcolor + "'"
if(_play) thtml += " play='" + _play + "'"
if(_menu) thtml += " menu='" + _menu + "'"
else thtml += " menu='" + _default_menu + "'"
if(_scale) thtml += " scale='" + _scale + "'"
if(_salign) thtml += " salign='" + _salign + "'"
if(_wmode) thtml += " wmode='" + _wmode + "'"
if(_base) thtml += " base='" + _base + "'"
if(_flashvars) thtml += " flashvars='" + _flashvars + "'"
thtml += "></embed>"
thtml += "</object>"
document.write(thtml)
}

//代码结束