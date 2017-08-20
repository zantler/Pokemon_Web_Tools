function totalEV()
{
	var hpEv = document.getElementById("hpEv");
    var hpEvValue = parseFloat(hpEv.value);
	var atkEv = document.getElementById("atkEv");
    var atkEvValue = parseFloat(atkEv.value);
    var defEv = document.getElementById("defEv");
    var defEvValue = parseFloat(defEv.value);
    var spatkEv = document.getElementById("spatkEv");
    var spatkEvValue = parseFloat(spatkEv.value);
    var spdefEv = document.getElementById("spdefEv");
    var spdefEvValue = parseFloat(spdefEv.value);
    var spdEv = document.getElementById("spdEv");
    var spdEvValue = parseFloat(spdEv.value);

    var total = 508-(spdEvValue+spdefEvValue+spatkEvValue+defEvValue+atkEvValue+hpEvValue);

    document.getElementById("totalEV").value = parseFloat(total).toString();

    function checkFilled() {
    	var inputVal = document.getElementById("totalEV");
    	if (inputVal.value < 0) 
    		{
    			inputVal.style.color = "red";
    		}
    	}
    	checkFilled();
}