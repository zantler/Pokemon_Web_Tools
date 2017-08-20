function setStats()
{
    $.getJSON('../docs/datos.json', function(data) {
		var listItems = [];
		var pokemon = document.getElementById("poke").value;
	    for( var i = 0; i< data.pokemon.length; i++)
		{
			var x = data.pokemon[i];
			if((pokemon.localeCompare(x.Nombre)) == 0)
			{
				listItems[0] = x.HP;
				listItems[1] = x.Rate;
			}
		}
		document.getElementById("baseHp").value = listItems[0];
		document.getElementById("rate").value = listItems[1];	
	    
	});
}