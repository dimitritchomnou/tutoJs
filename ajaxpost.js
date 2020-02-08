//execution d'un appel Ajax Post
// Prend en paramètre l'URL cible, la donnée à envoyer et la  fonction Callback appelée en cas de succès
//isJson permet d'indiquer si l'envoie concerne des données JSON
function ajaxPost(url, data, callback, isJson){
	var req = new XMLHttpRequest();
	req.open("POST", url);
	req.addEventListener("load", function(){
		if(req.status >= 200 && req.status < 400){
			//appel la fonction callback en lui passant la réponse de la requête
			callback(req.responseText);
		}else{
			console.error(`${req.status} ${req.statusText} ${url}`);
		}
	});

	req.addEventListener("error", function(){
		console.error("Erreur réseau avec l'URL" + URL);
	});

	//controle Json
	if (isJson) {
		// Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json");
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
	}
	req.send(data);
}
