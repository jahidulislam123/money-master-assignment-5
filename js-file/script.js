document.getElementById('calculate-btn').addEventListener('click',function(){

    console.log('clicked');
    const income = document.getElementById('income-input');
    const totalIncomeText =income.value;
    // console.log(totalIncomeText);


    const totalBalance =document.getElementById('total-balance');
    const balance =totalBalance.innerText;
    // console.log(balance);

    totalBalance.innerText=totalIncomeText;
    
    
})