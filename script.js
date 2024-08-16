
function calculateLoan(){
    const loanAmount=document.getElementById("amount");
    const loanInterest=document.getElementById("interest");
    const loanYears=document.getElementById("years");

    const monthlyPayment=document.getElementById("monthly");
    const totalPayment=document.getElementById("total-payment");
    const totalInterest=document.getElementById("total-interest");

    const principle=parseFloat(loanAmount.value);
    const calculatedInterest=parseFloat(loanInterest.value)/100/12;
    const calculatedPayment=parseFloat(loanYears.value)*12;

    const month=Math.pow(1+calculatedInterest,calculatedPayment);
    const monthly=(principle*month*calculatedInterest)/(month-1);

    if(isFinite(monthly)){
        monthlyPayment.value=monthly.toFixed(2);
        totalPayment.value=(monthly*calculatedPayment).toFixed(2);
        totalInterest.value=(monthly*calculatedPayment-principle).toFixed(2);
        showResults();
    }

}

function showResults(){
    document.getElementById("results").style.display=`block`;
}
