//----- 1st Step---
document.getElementById('deposite-btn').addEventListener('click', function(){
    //----- 2nd step----
    const depositeField = document.getElementById('deposite-field')
    const getValuestring = depositeField.value;
    const getValue = parseFloat(getValuestring);
    // 3rd step-----
    const depositeTaka = document.getElementById('deposite-taka');
    const getTakastring = depositeTaka.innerText;
    const getTaka = parseFloat(getTakastring)

    // depositeTaka.innerText = getValue;
    // 4th step-----
    const plusTaka = getTaka + getValue;
    depositeTaka.innerText = plusTaka;

    // 5th step---
    const depositeBalance = document.getElementById('diposite-balance');
    const getBalancestring = depositeBalance.innerText;
    const getBalance = parseFloat(getBalancestring);

    const addBalance = getValue + getBalance;

    depositeBalance.innerText = addBalance;

    // step----07
    depositeField.value = '';

})