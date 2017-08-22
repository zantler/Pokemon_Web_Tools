$.getJSON('./docs/datos.json', function(data) {
	var listItems = "<option selected disabled class='hideoption'>Select your Pokemon</option>";
	
	for( var i = 0; i< data.pokemon.length; i++)
	{
		listItems += "<option value='"+data.pokemon[i].Nombre+"'>"+data.pokemon[i].Nombre+"</option>";
	};
	$("#poke").html(listItems);
	$("#poke2").html(listItems);
});