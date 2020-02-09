
function lexiqueContent(lettre){
	console.log('test');
	ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/" + lettre, function(reponse){
		var elt = document.getElementById('lexique');
		var contenus = JSON.parse(reponse);
		elt.innerHTML = '';

		if (contenus.length > 0) {
			contenus.forEach(function(contenu){
				let ligneTitle = document.createElement("h3"),
					ligneCont = document.createElement("P");
				ligneTitle.innerHTML = `${contenu.term}`;
				ligneCont.innerHTML = `${contenu.definition}`;
				elt.appendChild(ligneTitle);
				elt.appendChild(ligneCont);

			});
		}else{

			var msgElt = document.createElement('p');
			msgElt.textContent = "Aucun mot";
			elt.appendChild(msgElt);
		}
	});

}


let lexCont = document.getElementById('lettre');
var lettres = ['A', 'B', 'C', 'D', 'E'];
lettres.forEach(function (lettre){
	var lien = document.createElement('a');
	//construction du lien
	lien.textContent = lettre;
	lien.href = '#';
	lien.addEventListener('click', function(){
		lexiqueContent(lettre);
	});
	lexCont.appendChild(lien);
	lexCont.appendChild(document.createTextNode(' | '));
});
lexCont.appendChild(document.createTextNode('...'));
