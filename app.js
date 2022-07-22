let initialPrice =document.querySelector('#initial-price');
let noOfStocks= document.querySelector('#no-of-stocks')
let currentPrice=document.querySelector('#current-price');
let btnCalculate= document.querySelector('#btn-calculate');
let displayOutput =document.querySelector('#output');

btnCalculate.addEventListener('click',checkHandler,false)
function checkHandler() {
    if(currentPrice.value ==='' || initialPrice.value ==='' || noOfStocks.value ==='') {
        alert('please fill out all the fields')
        
    }
    else {
        calculateProfitOrLoss();
    }
}
function calculateProfitOrLoss() {

    if(Number(currentPrice.value) > Number(initialPrice.value) && noOfStocks.value !='' ) {
        const profitValue=calculateProfit(Number(currentPrice.value),Number(initialPrice.value),Number(noOfStocks.value));   

    }
    else if(Number(initialPrice.value) > Number(currentPrice.value) && noOfStocks.value !='') {
const lossValue=calculateLoss(Number(currentPrice.value),Number(initialPrice.value),Number(noOfStocks.value));
    }
    else {
        displayOutput.innerText =`No pain, no gain`;
    }
}

function calculateProfit(sellingPrice,costPrice,noOfStocks) {
    var profit = (sellingPrice-costPrice)*noOfStocks;
    var profitPercentage = (profit/costPrice)*100
    displayOutput.innerText=  `Yay!! Your Profit is ${profit} and profit Percentage is ${profitPercentage.toFixed(2)}%`;
}

function calculateLoss(sellingPrice,costPrice,noOfStocks) {
    var loss = (costPrice-sellingPrice)*noOfStocks;
    var lossPercentage = (loss/costPrice)*100
    displayOutput.innerText=  `Yay!! Your Loss is ${loss} and loss Percentage is ${lossPercentage.toFixed(2)}%`;
   
}

