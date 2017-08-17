function setStats()
{
    $.getJSON('../docs/datos.json', function(data) {
		var listItems = [];
		var pokemon = document.getElementById("poke").value;
	    console.log(pokemon);
	    for( var i = 0; i< data.pokemon.length; i++)
		{
			var x = data.pokemon[i];
			if((pokemon.localeCompare(x.Nombre)) == 0)
			{
				console.log(pokemon.localeCompare(x.Nombre));
				listItems[0] = x.HP;
				console.log(listItems[0]);
				listItems[1] = x.Rate;
				console.log(listItems[1]);
			}
		}
		document.getElementById("baseHp").value = listItems[0];
		document.getElementById("rate").value = listItems[1];	
	    
	});
}