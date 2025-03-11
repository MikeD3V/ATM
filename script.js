var money = 500;



function chechBalance() {
    alert(money);
}

function withraw() {
    var withrawnMoney = window.prompt("How much: ");


    if (money >= withrawnMoney) {
        money -= withrawnMoney;
        alert("New Money: " + money)
    }
    else{
        alert("Not enough money");
    }

}

function deposit() {
    var depositMoney = parseFloat(window.prompt("How much: "));



    if(depositMoney <= 0){
        alert("Invalid amount");
    }
    else{
        money += depositMoney;
        alert("New Money: " + money)
    }
}


