/**
 * Created by Administrator on 2016/11/1 0001.
 */
var banner = document.getElementById("banner");
var bannerInner = utils.getEleByClass("innBox", banner)[0];
var focusList = utils.getEleByClass("list", banner)[0];
var imgs = bannerInner.getElementsByTagName("img");
var lis = focusList.getElementsByTagName("li");
var close=banner.getElementsByClassName("close")[0];
console.log(close);
window.setTimeout(allImg, 300);
function allImg() {
    for (var i = 0; i < imgs.length; i++) {
        if (i == 0) {
            utils.css(imgs[i].parentNode, "zIndex", 1);
            animate(imgs[i].parentNode, {opacity: 1}, 300);
        }
        (function (i) {
            var curImg = imgs[i];
            var tempImg = new Image();
            tempImg.src = curImg.getAttribute("realSrc");
            tempImg.onload = function () {
                curImg.src = this.src;
                utils.css(curImg, "display", "block");
            };
            tempImg=null;
        })(i);

    }
}
var step=0;
var timer=window.setInterval(autoMove,2000);
function autoMove(){
    if(step==2-1){
        step=-1;
    }
    step++;
    bindImg();
}
function bindImg(){
    for(var i=0;i<imgs.length;i++){
        if(i==step){
            utils.css(imgs[i].parentNode, "zIndex", 1);
            animate(imgs[i].parentNode, {opacity: 1}, 300,function(){
                var siblings=utils.sibling(this);
                for(var i=0;i<siblings.length;i++){
                    utils.css(siblings[i],"opacity",0);
                }
            });
        }else{
            utils.css(imgs[i].parentNode, "zIndex", 0);
        }
    }
    for(var i=0;i<lis.length;i++){
        lis[i].className=i==step?"selected":"";
    }
}
banner.onmousemove=function(){
    window.clearInterval(timer);

};
banner.onmouseout=function(){
    timer=window.setInterval(autoMove,2000);

};
(function(){
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
            step=this.index;
            bindImg();
        }
    }
})();
close.onclick=function(){
   /*banner.style.display="none";*/
    animate(banner,{display:"none"},800);
    console.log("ok")
};

var container=document.getElementById("container"),
    bottomCate=utils.getEleByClass("bottom-cate",container)[0],
    tabNav=utils.getEleByClass("tab-nav",bottomCate)[0],
 oLis=tabNav.getElementsByTagName("li"),
 oDivs=bottomCate.getElementsByTagName("div");
console.log(oLis);

function tabC(n){
    for(var i=0;i<oLis.length;i++){
        oLis[i].className="";
        oDivs[i].className="";
    }

    oLis[n].className="bg";
    oDivs[n].className="bg";

}

for(var i=0;i<oLis.length;i++){
    oLis[i].index=i;
    oLis[i].onclick=function(){

        tabC(this.index);
    }
}







