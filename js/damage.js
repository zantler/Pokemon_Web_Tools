function calc() {
	var maxHp = document.getElementById("maxHp");
    var maxHpValue = parseFloat(maxHp.value);
    var currentHp = document.getElementById("currentHp");
    var currentHpValue = parseFloat(currentHp.value);
    var status = document.getElementById("status");
    var statusValue = parseFloat(status.value);
    var rate = document.getElementById("rate");
    var rateValue = parseFloat(rate.value);

    var getBall = document.getElementById("ball").value;
    var ball;
    if(getBall == "PokeBall" || getBall == "FriendBall" || getBall == "HealBall" || getBall == "CherishBall" || getBall == "PremierBall" || getBall == "LuxuryBall")
    {
    	ball = 1;
    }
    else if(getBall == "GreatBall" || getBall == "SportBall")
    {
    	ball = 1.5;
    }
    else if(getBall == "UltraBall")
    {
    	ball = 2;
    }

    var answer = (((3*maxHpValue)-(2*currentHpValue))*ball*rateValue)/(3*maxHpValue)*statusValue;
    document.getElementById("answer").value = answer.toString();
}