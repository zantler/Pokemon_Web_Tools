function setAllStats()
{
    $.getJSON('./docs/datos.json', function(data) {
		var listItems = [];
		var pokemon = document.getElementById("poke2").value;
	    for( var i = 0; i< data.pokemon.length; i++)
		{
			var x = data.pokemon[i];
			if((pokemon.localeCompare(x.Nombre)) == 0)
			{
				listItems[0] = x.HP;
				listItems[1] = x.ATK;
				listItems[2] = x.DEF;
				listItems[3] = x["ATK SP"];
				listItems[4] = x["DEF SP"];
				listItems[5] = x.SPD;
			}
		}
		document.getElementById("hp").value = listItems[0];
		document.getElementById("atk").value = listItems[1];
		document.getElementById("def").value = listItems[2];	
		document.getElementById("spatk").value = listItems[3];	
		document.getElementById("spdef").value = listItems[4];	
		document.getElementById("spd").value = listItems[5];		    
	});
}