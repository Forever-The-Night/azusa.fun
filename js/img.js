var curpage = 1;
var sliding = false;
var click = false;
var flag = true;
var pagePrefix = 'slide';
var pageShift = 500;
var transitionPrefix = 'circle';
var svg = true;

function leftSlide() {
    if (click && curpage > 1 && flag == true) {
        sliding = true;
        curpage--;
        svg = true;
        setTimeout(() => {
            move();
        }, 200);
    }else{
        click=false
    }
}


function rightSlide() {
    if (click && curpage < 4 && flag == true) {
        sliding = true;
        curpage++;
        svg = false;
        setTimeout(() => {
            move();
        }, 200);
    }else{
        click=false
    }
}


function move() {
    if (sliding) {
        sliding = false;
        if (svg) {
            for (j = 1; j <= 9; j++) {
                flag = false
                var c = document.getElementById(transitionPrefix + j);
                c.classList.remove("steap");
                c.setAttribute("class", (transitionPrefix + j) + " streak")
            }
        } else {
            for (j = 10; j <= 18; j++) {
                flag = false
                var c = document.getElementById(transitionPrefix + j);
                c.classList.remove("steap");
                c.setAttribute("class", (transitionPrefix + j) + " streak")

            }
        }

        setTimeout(() => {
            for (i = 1; i <= 4; i++) {
                if (i == curpage) {
                    var a = document.getElementById(pagePrefix + i);
                    a.style.display = "inline-block"
                } else {
                    var b = document.getElementById(pagePrefix + i);
                    b.style.display = "none"
                }
            };
            sliding = true;
        }, 600);

        setTimeout(() => {
            if (svg) {
                for (j = 1; j <= 9; j++) {
                    var c = document.getElementById(transitionPrefix + j);
                    c.classList.remove("streak");
                    c.setAttribute("class", (transitionPrefix + j) + " steap");
                    flag = true
                }
            } else {
                for (j = 10; j <= 18; j++) {
                    var c = document.getElementById(transitionPrefix + j);
                    c.classList.remove("streak");
                    c.setAttribute("class", (transitionPrefix + j) + " steap");
                    flag = true
                }
                sliding = true;
            }
        }, 850);
        click = false;
    }

}


var scrollFunc = function (e) {
    e = e || window.event;
    if (click == false && flag == true) {
        click = true;
        if (e.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件    
            if (e.wheelDelta > 0) { //当滑轮向上滚动时 
                click = true;
                leftSlide();
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时 
                click = true;
                rightSlide();
            }
        } else if (e.detail) { //Firefox滑轮事件 
            if (e.detail > 0) { //当滑轮向上滚动时 
                click = true;
                leftSlide();
            }
            if (e.detail < 0) { //当滑轮向下滚动时 
                click = true;
                rightSlide();
            }
        }
    } else {
        ;
    }

}
//给页面绑定滑轮滚动事件 
if (document.addEventListener) {//firefox 
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法 //ie 谷歌 
window.onmousewheel = document.onmousewheel = scrollFunc;
//for codepen header
setTimeout(() => {
    rightSlide();

}, 500)


var left = document.getElementById('111');
var right = document.getElementById('slide1');


left.onclick=()=>{
  leftSlide();
}

right.onclick=()=>{
  rightSlide();
}
