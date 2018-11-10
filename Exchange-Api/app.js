const amountInput = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");



eventListeners();

function eventListeners(){
    amountInput.addEventListener("input",verileriAl);
    firstCurrency.onchange = () => verileriAl();
    secondCurrency.onchange = () => verileriAl();
    document.addEventListener('DOMContentLoaded', function(){
        verileriAl();
    });

    
}

function verileriAl(){
    Kur.kurGetir(firstCurrency.options[firstCurrency.selectedIndex].textContent)
    .then(response => kurHesapla(response.rates[secondCurrency.options[secondCurrency.selectedIndex].textContent]))
    .catch(err => console.log(err));
}

function kurHesapla(currency){
    let kur = amountInput.value * currency;
    UI.basliklariDegistir(firstCurrency.options[firstCurrency.selectedIndex].textContent,
        secondCurrency.options[secondCurrency.selectedIndex].textContent,kur);
}

