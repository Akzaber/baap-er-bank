document.getElementById('withdraw-btn').addEventListener('click', function(){
  const withdrawField = document.getElementById('withdraw-field');
  const getAmountFromWithdrawFieldString = withdrawField.value;
  const getAmountFromWithdrawField = parseFloat(getAmountFromWithdrawFieldString);

  withdrawField.value = '';

  if(isNaN(getAmountFromWithdrawField)){
    alert('Please provide a number');
    return;
  }

  const withdrawAmount = document.getElementById('withdraw-amount');
  const withdrawPreviousAmountString = withdrawAmount.innerText;
  const withdrawPreviousAmount = parseFloat(withdrawPreviousAmountString);

  
  
  const getTotalBalance = document.getElementById('diposite-balance');
  const getValueInString = getTotalBalance.innerText;
  const getValueInFloat = parseFloat(getValueInString);
  
  
  if(getAmountFromWithdrawField > getValueInFloat){
    alert('Tor baper account e ato taka nai');
    return;
  }

  const totalTakaInWithdraw = getAmountFromWithdrawField + withdrawPreviousAmount;
  withdrawAmount.innerText = totalTakaInWithdraw;
  
  const withdrawMoney = getValueInFloat - getAmountFromWithdrawField;
  getTotalBalance.innerText = withdrawMoney;


})