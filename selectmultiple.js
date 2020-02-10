function quantite(selectObject){
	let qteSelectionnee = 0;
	//boucle sur les options
	for (var i = 0; i < selectObject.options.length; i++) {
		if(selectObject.options[i].selected){//cas selectionné on incrémente la var qteSelectionne
			qteSelectionnee++;
		}
	}

	return qteSelectionnee;
}

let btn = document.getElementById('btn');
let nbTypeMusik = document.selectForm.typesMusique;

btn.addEventListener('click', function(){
		console.log(quantite(nbTypeMusik));
});
