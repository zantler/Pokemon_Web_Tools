
function totalStats() {
	
    $.getJSON ('./docs/natures.json', function(data) {
        var y = new Array(2);
    	var nature = document.getElementById("nature").value;
		  for( var i = 0; i< data.natures.length; i++)
			{
				var x = data.natures[i];
				if((nature.localeCompare(x.name)) == 0)
				{
					y=[x.increase];
					y.push(x.decrease);
					break;
				}
			}	

        var hp = document.getElementById("hp");
        var hpValue = parseFloat(hp.value);
        var hpEv = document.getElementById("hpEv");
        var hpEvValue = parseFloat(hpEv.value);
        var hpIvHp = document.getElementById("hpIvHp");
        var hpIvValue = parseFloat(hpIv.value);

        var atk = document.getElementById("atk");
        var atkValue = parseFloat(atk.value);
        var atkEv = document.getElementById("atkEv");
        var atkEvValue = parseFloat(atkEv.value);
        var atkIvHp = document.getElementById("atkIv");
        var atkIvValue = parseFloat(atkIv.value);

        var def = document.getElementById("def");
        var defValue = parseFloat(def.value);
        var defEv = document.getElementById("defEv");
        var defEvValue = parseFloat(defEv.value);
        var defIvHp = document.getElementById("defIvHp");
        var defIvValue = parseFloat(defIv.value);

        var spatk = document.getElementById("spatk");
        var spatkValue = parseFloat(spatk.value);
        var spatkEv = document.getElementById("spatkEv");
        var spatkEvValue = parseFloat(spatkEv.value);
        var spatkIvHp = document.getElementById("spatkIvHp");
        var spatkIvValue = parseFloat(spatkIv.value);

        var spdef = document.getElementById("spdef");
        var spdefValue = parseFloat(spdef.value);
        var spdefEv = document.getElementById("spdefEv");
        var spdefEvValue = parseFloat(spdefEv.value);
        var spdefIvHp = document.getElementById("spdefIvHp");
        var spdefIvValue = parseFloat(spdefIv.value);

        var spd = document.getElementById("spd");
        var spdValue = parseFloat(spd.value);
        var spdEv = document.getElementById("spdEv");
        var spdEvValue = parseFloat(spdEv.value);
        var spdIvHp = document.getElementById("spdIvHp");
        var spdIvValue = parseFloat(spdIv.value);

        var level = document.getElementById("level2");
        var levelValue = parseFloat(level.value);

        var answerHp =(((hpValue*2)+hpIvValue+(hpEvValue/4))*levelValue/100)+levelValue+10;
        document.getElementById("hpTotal").value = parseInt(answerHp|0).toString(); 

        var answerAtk;
        if(y[0] == "attack")
        {
            answerAtk = ((((atkValue*2)+atkIvValue+(atkEvValue/4))*levelValue/100)+5)*1.1;
        }
        else if(y[1] == "attack")
        {
            answerAtk = ((((atkValue*2)+atkIvValue+(atkEvValue/4))*levelValue/100)+5)*0.9;
        }
        else
        {
            answerAtk = ((((atkValue*2)+atkIvValue+(atkEvValue/4))*levelValue/100)+5);
        }
        document.getElementById("atkTotal").value = parseInt(answerAtk|0).toString();

        var answerDef;
        if(y[0] == "defense")
        {
            answerDef = ((((defValue*2)+defIvValue+(defEvValue/4))*levelValue/100)+5)*1.1;
        }
        else if(y[1] == "defense")
        {
            answerDef = ((((defValue*2)+defIvValue+(defEvValue/4))*levelValue/100)+5)*0.9;
        }
        else
        {
            answerDef = ((((defValue*2)+defIvValue+(defEvValue/4))*levelValue/100)+5);
        }
        document.getElementById("defTotal").value = parseInt(answerDef|0).toString();

        var answerSpatk;
        if(y[0] == "sp. attack")
        {
            answerSpatk = ((((spatkValue*2)+spatkIvValue+(spatkEvValue/4))*levelValue/100)+5)*1.1;
        }
        else if(y[1] == "sp. attack")
        {
            answerSpatk = ((((spatkValue*2)+spatkIvValue+(spatkEvValue/4))*levelValue/100)+5)*0.9;
        }
        else
        {
            answerSpatk = ((((spatkValue*2)+spatkIvValue+(spatkEvValue/4))*levelValue/100)+5);
        }
        document.getElementById("spatkTotal").value = parseInt(answerSpatk|0).toString();

        var answerSpdef;
        if(y[0] == "sp. defense")
        {
            answerSpdef = ((((spdefValue*2)+spdefIvValue+(spdefEvValue/4))*levelValue/100)+5)*1.1;
        }
        else if(y[1] == "sp. defense")
        {
            answerSpdef = ((((spdefValue*2)+spdefIvValue+(spdefEvValue/4))*levelValue/100)+5)*0.9;
        }
        else
        {
            answerSpdef = ((((spdefValue*2)+spdefIvValue+(spdefEvValue/4))*levelValue/100)+5);
        }
        document.getElementById("spdefTotal").value = parseInt(answerSpdef|0).toString();

        var answerSpd;
        if(y[0] == "speed")
        {
            answerSpd = ((((spdValue*2)+spdIvValue+(spdEvValue/4))*levelValue/100)+5)*1.1;
        }
        else if(y[1] == "speed")
        {
            answerSpd = ((((spdValue*2)+spdIvValue+(spdEvValue/4))*levelValue/100)+5)*0.9;
        }
        else
        {
            answerSpd = ((((spdValue*2)+spdIvValue+(spdEvValue/4))*levelValue/100)+5);
        }
        document.getElementById("spdTotal").value = parseInt(answerSpd|0).toString();
    });   
}