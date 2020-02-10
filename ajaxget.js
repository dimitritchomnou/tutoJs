
//Fonction pour fichier text
function ajaxGet(url, callback) {
	//var req = new XMLHttpRequest();
	//création d'une requêtte http
	var req = new XMLHttpRequest();
	//requete synchrone le 3e param = false
	//req.open("GET", "http://sass.test/javascript-web-srv/data/langages.txt", false);
	//Requete type Asynchrone lorsque le 3e paramèttre qui vaut true est absent
	req.open("GET", url);
	req.addEventListener("load", function(){

		if(req.status >= 200 && req.status < 400){
			//requette traitée
			callback(req.responseText);
		}else{
			//Afficharge des informations sur l'echec
			console.error(req.status + " " + req.statusText);
		}
		
	});
	req.addEventListener("error", function(){
		//la requete n'a pas reussi à atteindre le serveur
		console.error("Erreur réseau avec l'URL" + URL);
	});
	req.send(null);
	//Affiche  la réponse reçue pour la requête
}

//function afficharge 
function afficher(reponse){
	console.log(reponse);
}
//ajaxGet("http://sass.test/javascript-web-srv/data/langages.txt", afficher);


