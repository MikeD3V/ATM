


var money = 500;
var userMoney = document.getElementById('money');

userMoney.innerText = '$' + money;



function withraw() {

    var withrawnMoney = window.prompt("How much: ");
    

    if (money >= withrawnMoney) {
        money -= withrawnMoney;
        userMoney.innerText = '$' + money;
    }
    else{
        alert("Not enough money");
    }
}

function deposit() {
    var depositMoney = parseFloat(window.prompt("How much: "));

    if(isNaN(depositMoney) || depositMoney <= 0){
        alert("Invalid amount");
    }
    else{
        money += depositMoney;
        userMoney.innerText = '$' + money;
    }
}


