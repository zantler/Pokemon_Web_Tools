function setAllStats()
{
    $.getJSON('../docs/datos.json', function(data) {
		var listItems = [];
		var pokemon = document.getElementById("poke2").value;
	    console.log(pokemon);
	    for( var i = 0; i< data.pokemon.length; i++)
		{
			var x = data.pokemon[i];
			if((pokemon.localeCompare(x.Nombre)) == 0)
			{
				console.log(pokemon.localeCompare(x.Nombre));
				listItems[0] = x.HP;
				console.log(listItems[0]);
				listItems[1] = x.ATK;
				console.log(listItems[1]);
				listItems[2] = x.DEF;
				console.log(listItems[2]);
				listItems[3] = x["ATK SP"];
				console.log(listItems[3]);
				listItems[4] = x["DEF SP"];
				console.log(listItems[4]);
				listItems[5] = x.SPD;
				console.log(listItems[5]);
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