var form = document.querySelector("form");
var msg = document.getElementById('msg');



//Gestion de la soumission du formulaire
form.addEventListener("submit", function(e){
	e.preventDefault();

	//récupération des champs du formulaire dans l'objet FormData
	var data = new FormData(form);
	var array = '';
	var n = 0;
	for (var value of data.entries()){
		array +=`${value[n]}:"${value[n+1]}", `; 
	}

	//formation de l'objet
	obj = eval('({' + array + '})');
	console.log(obj.pseudo);
	ajaxPost(
		"https://oc-jswebsrv.herokuapp.com/api/temoignage", 
		obj, 
		function(reponse){
		//afficharge dans la console en cas de succès
		console.log("Commande envoyée au serveur");
		msg.innerHTML = 'Témoignage envoyé';
	}, true);

});

