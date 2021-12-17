var kichThuoc = document.getElementsByClassName("myCarousel")[0].clientWidth;
var chuyenSlide = document.getElementsByClassName("carousel-inner")[0];
var Img = chuyenSlide.getElementsByTagName("img");
var count = Img.length;
var Max = kichThuoc * (count-1);
var chuyen =0;

function Next(){
    if(chuyen < Max) chuyen += kichThuoc;
    else chuyen =  0;
    chuyenSlide.style.marginLeft = '-' + chuyen + 'px';
}
Next();

function Back(){
    if(chuyen == 0) chuyen = Max;
    else chuyen -= kichThuoc;
    chuyenSlide.style.marginLeft = '-' + chuyen + 'px';
}
Back();

setInterval(function (){
    Next();
}, 3000);