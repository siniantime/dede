var select2=new Array(5);
for(i=0;i<5;i++){
select2[i]=new Array()};
select2[0][0]=new Option("---- 选择您需要产品的类别 --","javascript:void(0);");
select2[1][0]=new Option("-- 选择您需要的产品 --","javascript:void(0);");
select2[1][1]=new Option("颚式破碎机","http://www.weilaijixie.com/espsj.html");
select2[1][2]=new Option("欧版颚式破碎机","http://www.weilaijixie.com/obespsj.html");
select2[1][3]=new Option("反击式破碎机","http://www.weilaijixie.com/fjpsj.html");
select2[1][4]=new Option("欧版反击式破碎机","http://www.weilaijixie.com/obfjp.html");
select2[1][5]=new Option("弹簧圆锥破碎机","http://www.weilaijixie.com/thyzp.html");
select2[1][6]=new Option("液压圆锥破碎机","http://www.weilaijixie.com/yyyzp.html");
select2[1][7]=new Option("锤式破碎机","http://www.weilaijixie.com/cspsj.html");
select2[1][8]=new Option("对辊破碎机","http://www.weilaijixie.com/dgpsj.html");
select2[1][9]=new Option("复合破碎机","http://www.weilaijixie.com/fhpsj.html");
select2[1][10]=new Option("移动破碎站","http://www.weilaijixie.com/ydpsz.html");
select2[1][11]=new Option("箱式破碎机","http://www.weilaijixie.com/xspsj.html");
select2[2][0]=new Option("VSI制砂机","http://www.weilaijixie.com/vsi.html");
select2[2][1]=new Option("PCL制砂机","http://www.weilaijixie.com/pcl.html");
select2[2][2]=new Option("轮式洗砂机","http://www.weilaijixie.com/lsxsj.html");
select2[2][3]=new Option("螺旋洗砂机","http://www.weilaijixie.com/lxxsj.html");
select2[2][4]=new Option("圆振动筛","http://www.weilaijixie.com/yzds.html");
select2[2][5]=new Option("细碎机","http://www.weilaijixie.com/xsj.html");
select2[2][6]=new Option("细砂回收机","http://www.weilaijixie.com/xshsj.html");
select2[2][7]=new Option("皮带输送机","http://www.weilaijixie.com/pdssj.html");
select2[2][8]=new Option("振动给料机","http://www.weilaijixie.com/zdglj.html");
select2[3][0]=new Option("球磨机","http://www.weilaijixie.com/qmj.html");
select2[3][1]=new Option("浮选机","http://www.weilaijixie.com/fxj.html");
select2[3][2]=new Option("烘干机","http://www.weilaijixie.com/hgj.html");
select2[3][3]=new Option("分级机","http://www.weilaijixie.com/fjj.html");
select2[3][4]=new Option("磁选机","http://www.weilaijixie.com/cxj.html");
select2[3][5]=new Option("回转窑","http://www.weilaijixie.com/hzy.html");
select2[3][6]=new Option("雷蒙磨粉机","http://www.weilaijixie.com/lmmfj.html");
select2[3][7]=new Option("超细磨粉机","http://www.weilaijixie.com/cxmfj.html");
select2[4][0]=new Option("石料生产线","http://www.weilaijixie.com/shashiliaoshengchanxian/slscx.html");
select2[4][1]=new Option("制砂生产线","http://www.weilaijixie.com/zhishashashengchanxian/zsscx.html");
function redirec(x){var temp=document.pronav.s2;for(i=0;i<select2[x].length;i++){temp.options[i]=new Option(select2[x][i].text,select2[x][i].value)};temp.options[0].selected=true
}
function redirec1(x){var temp=document.pronav1.s4;for(i=0;i<select2[x].length;i++){temp.options[i]=new Option(select2[x][i].text,select2[x][i].value)};temp.options[0].selected=true
}