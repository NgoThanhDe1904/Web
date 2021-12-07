//Phan mui ten cua vot
var left = document.querySelector("i.fa-chevron-circle-left");
var right = document.querySelector("i.fa-chevron-circle-right");
var itemActive = document.querySelector(".img-active");
console.log(itemActive);

var count = 0;
function  rightClick(){
  right.addEventListener("click", function (){
    if (count == 8) count = 0;
    itemActive.style.marginLeft = `calc(-33.33% * ${count})`;
    count++;
  })
}
rightClick();

function  leftClick(){
  left.addEventListener("click", function (){
    if (count == -1) count = 9;
    itemActive.style.marginLeft = `calc(-33.33% * ${count})`;
    count--;
  })
}
leftClick();

//Phan mui ten cua giay
var leftg = document.querySelector("i.fa-Giay-Left");
var rightg = document.querySelector("i.fa-Giay-Right");
var item = document.querySelector(".img-Giay-Active");

console.log(item)
var countg = 0;
function  RightClick(){
  rightg.addEventListener("click", function (){
    if (countg == 10) countg = 0;
    item.style.marginLeft = `calc(-33.33% * ${countg})`;
    countg++;
  })
}
RightClick();

function LeftClick(){
  leftg.addEventListener("click", function (){
    if (countg == -1) countg = 2;
    item.style.marginLeft = `calc(-20% * ${countg})`;
    countg--;
  })
}
LeftClick();

//Phan mũi ten cua ao
var leftA = document.querySelector("i.fa-ao-left");
var rightA = document.querySelector("i.fa-ao-right");
var itemAo = document.querySelector(".img-Ao-Active");
console.log(itemAo)

var countAo = 0;

function rightClickAo(){
  rightA.addEventListener("click", function (){
    if(countAo == 6) countAo = 0;
    itemAo.style.marginLeft = `calc(-33.33% * ${countAo})`;
    countAo++;
  })
}
rightClickAo();

function leftClickAo(){
  leftA.addEventListener("click", function (){
    if(countAo == -1) countAo = 2;
    itemAo.style.marginLeft = `calc(-33,33% * ${countAo})`;
    countAo--;
  })
}
leftClickAo();
// Phần chevron circle of Quan
var leftQ = document.querySelector("i.fa-Quan-Left");
var rightQ = document.querySelector("i.fa-Quan-Right");
var itemQuan = document.querySelector(".img-Quan-Active");
console.log(itemQuan);

var c = 0;

function  lickRight(){
  rightQ.addEventListener("click", function (){
    if (c == 9) c = 0;
    itemQuan.style.marginLeft = `calc(-33.33% * ${c})`;
    c++;
  })
}
lickRight();

function clickLeft(){
  leftQ.addEventListener("click", function (){
    if (c == -1) c = 2;
    itemQuan.style.marginLeft = `calc(-33.33% * ${c})`;
    c--;
  })
}
clickLeft();

//edit Balo
var leftBalo = document.querySelector("i.fa-Balo-Left");
var rightBalo = document.querySelector("i.fa-Balo-Right");
var itemBalo = document.querySelector(".img-Balo-Active");
console.log(itemBalo);

var result = 0;

function clickBaloRight(){
  rightBalo.addEventListener("click", function (){
    if (result == 9) result = 0;
    itemBalo.style.marginLeft = `calc(-33.33% * ${result})`;
    result++;
  })
}
clickBaloRight();

function clickBaloLeft(){
  leftBalo.addEventListener("click", function (){
    if (result == -1) result = 2;
    itemBalo.style.marginLeft = `calc(-33.33% * ${result})`;
    result--;
  })
}
clickBaloLeft();
//edit Tui
var leftTui = document.querySelector("i.fa-Tui-Left");
var rightTui = document.querySelector("i.fa-Tui-Right");
var itemTui = document.querySelector(".img-Tui-Active");
console.log(itemTui);

var t = 0;

function  clickTuiRight(){
  rightTui.addEventListener("click", function (){
    if (t == 9) t =0;
    itemTui.style.marginLeft = `calc(-33.33% * ${t}`;
    t++
  })
}
clickTuiRight();

function  clickTuiLeft(){
  leftTui.addEventListener("click", function (){
    if (t ==-1) t = 2;
    itemTui.style.marginLeft = `calc(-33.33% * ${t}`;
    t--;
  })
}
clickTuiLeft();
//edit Phukien
var leftPhuKien = document.querySelector("i.fa-PhuKien-Left");
var rightPhuKien = document.querySelector("i.fa-PhuKien-Right");
var itemPhuKien = document.querySelector(".img-PhuKien-Active");
console.log(itemPhuKien);

var pk = 0;

function clickPhuKienRight(){
  rightPhuKien.addEventListener("click", function (){
    if(pk == 9) pk = 0;
    itemPhuKien.style.marginLeft = `calc(-33.33% * ${pk}`;
    pk++;
  })
}
clickPhuKienRight();

function clickPhuKienLeft(){
  leftPhuKien.addEventListener("click", function (){
    if(pk == -1) pk = 2;
    itemPhuKien.style.marginLeft = `calc(-33.33% * ${pk}`;
    pk--;
  })
}
clickPhuKienLeft();
