// SelecTHORS   hehehe
const item1Btn = document.querySelector('#item__1-btn');
const item2Btn = document.querySelector('#item__2-btn');
const item3Btn = document.querySelector('#item__3-btn');
const item4Btn = document.querySelector('#item__4-btn');

const item1Info = document.querySelector('#item-1__info');
const item2Info = document.querySelector('#item-2__info');
const item3Info = document.querySelector('#item-3__info');
const item4Info = document.querySelector('#item-4__info');

let hidden = function () {
    if (item1Info.style.display === "none") {
        item1Info.style.display = "block";
    } else {
        item1Info.style.display === "none";
    }
}

item1Btn.addEventListener('click', () => {
    if (item1Info.style.display === "none") {
        item1Info.style.display = "block";
    } else {
        item1Info.style.display = "none";
    }
});
item2Btn.addEventListener('click', () => {
    if (item2Info.style.display === "none") {
        item2Info.style.display = "block";
    } else {
        item2Info.style.display = "none";
    }
});
item3Btn.addEventListener('click', () => {
    if (item3Info.style.display === "none") {
        item3Info.style.display = "block";
    } else {
        item3Info.style.display = "none";
    }
});
item4Btn.addEventListener('click', () => {
    if (item4Info.style.display === "none") {
        item4Info.style.display = "block";
    } else {
        item4Info.style.display = "none";
    }
});

