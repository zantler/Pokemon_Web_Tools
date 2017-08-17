$.getJSON('../docs/natures.json', function(data) {
	var listItems = "<option selected disabled class='hideoption'>Select your Nature</option>";
	
	for( var i = 0; i< data.natures.length; i++)
	{
		listItems += "<option value='"+data.natures[i].name+"'>"+data.natures[i].name+"</option>";
	};
	$("#nature").html(listItems);
});