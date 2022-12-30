let upButton = document.querySelector(`#up`);
let downBotton = document.querySelector(`#down`);
let countInput = document.querySelector(`#count`);
upButton.addEventListener(`click`,function(){
    countInput.value = Number(countInput.value)+1;
});
downBotton.addEventListener(`click`,function(){
    countInput.value = Number(countInput.value)-1;
});
