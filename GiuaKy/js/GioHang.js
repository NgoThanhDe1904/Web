var left = document.querySelector("i.fa-chevron-circle-left");
var right = document.querySelector("i.fa-chevron-circle-right");
var itemGioHang = document.querySelector(".img-active-GioHang");

console.log(itemGioHang);
var count = 0;
function clickRight(){
right.addEventListener("click", function (){
  if(count == 6) count = 0;
  itemGioHang.style.marginLeft= `calc(-33.33% * ${count})`;
  count = count + 1;
})
}
clickRight();

function clickLeft() {
  left.addEventListener("click", function (){
    if (count == -1) count = 6;
    itemGioHang.style.marginLeft = `calc(-33.33% * ${count})`;
    count --;
  })
}
clickLeft();

