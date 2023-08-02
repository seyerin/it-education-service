const imgs = document.querySelectorAll("img");
const menuName = document.querySelectorAll(".menu-name");
const menuPrice = document.querySelectorAll(".menu-price");
const category = document.querySelectorAll("li");
const SETCATEGORYNUM = "setCategoryNum"; 
const REMOVE = "remove";


const snackArr = ["/content/kiosk/img/fast-food/snack/cheese-stick.png", "/content/kiosk/img/fast-food/snack/chicken-nugget.png", "/content/kiosk/img/fast-food/snack/chicken-wing.png", "/content/kiosk/img/fast-food/snack/french-fries.png", "/content/kiosk/img/fast-food/snack/kohlslow.png"];
const snackNameArr = ["치즈스틱", "치킨 너겟", "치킨 윙", "감자튀김", "코울슬로"];
const drinkArr = ["/content/kiosk/img/fast-food/drink/americano.png", "/content/kiosk/img/fast-food/drink/coke.png", "/content/kiosk/img/fast-food/drink/juice.png", "/content/kiosk/img/fast-food/drink/sprite.png", "/content/kiosk/img/fast-food/drink/vanilla-shake.png"];
const drinkNameArr = ["아메리카노", "콜라", "주스", "사이다", "바닐라 쉐이크"];

const snackPriceArr = ["3,300원", "3,300원", "4,000원", "2,800원", "2,700원"];
const drinkPriceArr = ["3,300원", "2,400원", "2,000원", "2,400원", "3,500원"];

const imgArr = [snackArr, drinkArr];
const textArr = [snackNameArr, drinkNameArr];
const priceArr = [snackPriceArr, drinkPriceArr];

let categoryNum = Number(localStorage.getItem(SETCATEGORYNUM)) -1;

if(categoryNum == 2){
  location.href = "/content/kiosk/fast-food/html/order-check.html";
}
category[categoryNum].style.backgroundColor = "rgb(109, 255, 98)";
category[categoryNum].style.width = "18.3vw";
category[categoryNum].style.position = "relative";
category[categoryNum].style.left = "1.05vw";

for(let i = 0; i < imgs.length; i++){
  imgs[i].setAttribute("src", imgArr[categoryNum][i]);
  menuName[i].innerText = textArr[categoryNum][i];
  menuPrice[i].innerText =priceArr[categoryNum][i];
  if(snackArr[i] == undefined || snackNameArr[i] == undefined || snackPriceArr[i] == undefined){
    imgs[i].parentElement.classList.add("none");
    imgs[i].classList.add(REMOVE);
    menuName[i].classList.add(REMOVE);
    menuPrice[i].classList.add(REMOVE);
  }
}

for(let i = 0; i < category.length; i++){
  category[i].addEventListener("click", () => {
    localStorage.setItem(SETCATEGORYNUM, category[i].classList[0]);
    location.reload();
  })
}
// console.log(categoryNum);
//----------------------------------------------------design
const menuBox = document.querySelectorAll(".menu-box");

const imgTextArr = ["snackImg", "drinkImg"];
const priceTextArr = ["snackPrice", "drinkPrice"];
const menuNameArr = ["snackName", "drinkName"];

  for(let i = 0; i < menuBox.length; i++){
    menuBox[i].addEventListener("click", () => {
      localStorage.setItem(imgTextArr[categoryNum], imgArr[categoryNum][i]);
      localStorage.setItem(priceTextArr[categoryNum], priceArr[categoryNum][i]);
      localStorage.setItem(menuNameArr[categoryNum], textArr[categoryNum][i]);
    })
  }

  let snackChange = localStorage.getItem("snackChange");
  let drinkChange = localStorage.getItem("drinkChange");

  if(snackChange){
    for(let i = 0; i < menuBox.length; i++){
      menuBox[i].addEventListener("click", () => {
        localStorage.setItem(imgTextArr[categoryNum], imgArr[categoryNum][i]);
        localStorage.setItem(priceTextArr[categoryNum], priceArr[categoryNum][i]);
        localStorage.setItem(menuNameArr[categoryNum], textArr[categoryNum][i]);
        localStorage.removeItem("snackChange");
        location.href = "/content/kiosk/fast-food/html/order-check.html";
      })
    }
  }
  else if(drinkChange){
    for(let i = 0; i < menuBox.length; i++){
      menuBox[i].addEventListener("click", () => {
        localStorage.setItem(imgTextArr[categoryNum], imgArr[categoryNum][i]);
        localStorage.setItem(priceTextArr[categoryNum], priceArr[categoryNum][i]);
        localStorage.setItem(menuNameArr[categoryNum], textArr[categoryNum][i]);
        localStorage.removeItem("drinkChange");
        location.href = "/content/kiosk/fast-food/html/order-check.html";
      })
    }
  }