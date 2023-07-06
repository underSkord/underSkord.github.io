// buttons
const item1Btn = document.querySelector('#item__1-btn');
const item2Btn = document.querySelector('#item__2-btn');
const item3Btn = document.querySelector('#item__3-btn');
const item4Btn = document.querySelector('#item__4-btn');

// info panels
const item1Info = document.querySelector('#item-1__info');
const item2Info = document.querySelector('#item-2__info');
const item3Info = document.querySelector('#item-3__info');
const item4Info = document.querySelector('#item-4__info');

// functions
const toggleInfo = (button, info, projectNum) => {
    if (info.style.display === "none") {
      info.style.display = "block";
      button.textContent = `Close ${projectNum}`;
    } 
    else {
      info.style.display = "none";
      button.textContent = "Expand";
  };
};

// buttons
item1Btn.addEventListener('click', () => {
    toggleInfo(item1Btn, item1Info, 'Project 1');
});
item2Btn.addEventListener('click', () => {
    toggleInfo(item2Btn, item2Info, 'Project 2');
});
item3Btn.addEventListener('click', () => {
    toggleInfo(item3Btn, item3Info, 'Project 3');
});
item4Btn.addEventListener('click', () => {
    toggleInfo(item4Btn, item4Info, 'Project 4');
});