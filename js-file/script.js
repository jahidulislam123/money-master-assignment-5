
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

   
    
    if( rentCostText >= 0 && foodCostText >= 0 &&  clothCostText >= 0){
        totalExpense.innerText =totalExpenseCost;
        

    }
    else{
        const notifyPositiveall =document.getElementById('notify-negativeall');
        
        notifyPositiveall.style.display='block';
        
       

    }
    // foodCost.value='';
    // rentCost.value='';
    // clothCost.value='';




    const income = document.getElementById('income-input');
    const totalIncomeText =income.value;
    const totalIncome =parseFloat(totalIncomeText);
    // console.log(totalIncomeText);


    const totalBalance =document.getElementById('total-balance');
    const balanceText =totalBalance.innerText;
    const balance=parseFloat(balanceText)

    // console.log(balance);
    const nortifyPositve =document.getElementById('notify-negative');
    const notifyError =document.getElementById('notify-fail');
    if( totalIncome <0){
        
        nortifyPositve.style.display='block';
        notifyError.style.display='none';
        

    }

    else if(totalExpenseCost>totalIncome){
        nortifyPositve.style.display='none';
        

        notifyError.style.display='block';

    }
    

   else{
    totalBalance.innerText=totalIncome-totalExpenseCost;
   }

    // income.value='';
    
})




document.getElementById('save-btn').addEventListener('click',function(){

    // console.log('clicked');
    const save= document.getElementById('saving-input');
    const saveText =parseFloat(save.value);
    // console.log(saveText);
    const savingVag =saveText/100;
    

    const income1 = document.getElementById('income-input');
    const totalIncomeText1 =income1.value;
    const totalIncome1 =parseFloat(totalIncomeText1);
    // console.log(totalIncome1);

    const percentSave =totalIncome1*savingVag;
    


    const savingAmount =document.getElementById('saving-amount');
    const savingAmountText =savingAmount.innerText;
    const savintAmountTotal =parseFloat(savingAmountText);
    // console.log(savintAmountTotal);
    savingAmount.innerText=percentSave;



    const totalBalance =document.getElementById('total-balance');
    const balanceText =totalBalance.innerText;
    const balance=parseFloat(balanceText);
    // console.log(balance);

    const remainingAmountFinal = balance-percentSave;


    const remainingAmount =document.getElementById('remaining-amount');
    console.log(remainingAmount.innerText);

    
    // console.log(remainingAmountFinal);
    remainingAmount.innerText=remainingAmountFinal;
    


    
    
    
    
});
