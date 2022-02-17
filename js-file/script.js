document.getElementById('calculate-btn').addEventListener('click',function(){

    console.log('clicked');
    const income = document.getElementById('income-input');
    const totalIncomeText =income.value;
    const totalIncome =parseFloat(totalIncomeText);
    // console.log(totalIncomeText);


    const totalBalance =document.getElementById('total-balance');
    const balanceText =totalBalance.innerText;
    const balance=parseFloat(balanceText)

    // console.log(balance);

    totalBalance.innerText=totalIncome+balance;

    // income.value='';
    
    
});

document.getElementById('calculate-btn').addEventListener('click',function(){

    const foodCost=document.getElementById('food').value;
    const foodCostText =parseFloat(foodCost);
    
    const rentCost=document.getElementById('rent').value;
    const rentCostText =parseFloat(rentCost);

    const clothCost =document.getElementById('cloth').value;
    const clothCostText =parseFloat(clothCost);
    const totalExpenseCost =foodCostText+rentCostText+clothCostText;


    const totalExpense =document.getElementById('total-expense');
    const expensesText =totalExpense.innerText;
    const expenses =parseFloat(expensesText);

    totalExpense.innerText =totalExpenseCost+expenses;
    // foodCost.value='';
    // rentCost.value='';
    // clothCost.value='';
    
})