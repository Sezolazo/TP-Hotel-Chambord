window.onload = function(){

// Suppression bug scroll carouseL 
let suppScrollCarousel=document.querySelectorAll('label[for]');
suppScrollCarousel.forEach(a => a.addEventListener('click', function(e){
e.preventDefault();

let target = window[this.htmlFor];
target.checked = !target.checked;
}));
      
// CONTROLE DES CHAMPS DU FORMULAIRE DE LA PAGE CONTACT

// Désactiver CHECKSPAN
let mesCheckspan = document.getElementsByClassName('checkspan');
console.log(mesCheckspan);

function deactivateCheckspan(){
  for(let a=0; a<mesCheckspan.length; a++){
    mesCheckspan[a].style.display='none';
  };
};

// Activer CHECKSPAN
let mesCheckspanActifs=document.getElementsByClassName('checkspan');

function activateCheckspan(){
  for(let b=0; b<mesCheckspanActifs.length; b++){
    mesCheckspanActifs[b].style.display='block';
  };
}

// VERIFICATIONS

// Verification nom
let monNom = document.getElementById('name-contact');
console.log(monNom);

function verifNom(){
  if(monNom.value.length>=3){
    deactivateCheckspan();
    monNom.style.borderColor='green';
    return true;
  }
  else{
    activateCheckspan();
    return false;
  };
};

// Verification entreprise
let monEntreprise = document.getElementById('entreprise-contact');
console.log(monEntreprise);

function verifEntreprise(){
  if(monEntreprise.value.length>=3 && monEntreprise.value.length !=""){
    deactivateCheckspan();
    monEntreprise.style.borderColor='green';
    return true;
  }
  else{
    activateCheckspan();
    return false;
  };
};

// Verification pays
let monPays=document.getElementById('pays-contact');
console.log(monPays);

function verifPays(){
  if(monPays.value.length>=3 && monPays.value.length !=""){
    deactivateCheckspan();
    monPays.style.borderColor='green';
    return true;
  }
  else{
    activateCheckspan();
    return false;
  };
};

// Verification adresse mail

let monMail=document.getElementById('mail-contact');
console.log(monMail);

function verifMail(){
  if(monMail.value.length>=3 && monMail.value.length !=""){
    deactivateCheckspan();
    monMail.style.borderColor='green';
    return true;
  }
  else{
    activateCheckspan();
    return false;
  };
};

// Verification message

let monMessage=document.getElementById('message-contact');
console.log(monMessage);

function verifMessage(){
  if(monMessage.value.length>=3 && monMessage.value.length !=""){
    deactivateCheckspan();
    monMessage.style.borderColor='green';
    return true;
  }
  else{
    activateCheckspan();
    return false;
  };
};

// Appel de la fonction désactivation des checkspan
deactivateCheckspan();

// Bouton envoyer et vérification finale

let monFormulaire=document.getElementById('contact-form');

monFormulaire.onsubmit=function(e){
  let verifications;

  verifications= verifNom();
  verifications= verifEntreprise() && verifications;
  verifications= verifPays() && verifications;
  verifications= verifMail() && verifications;
  verifications= verifMessage() && verifications;

  if(!verifications){
    e.preventDefault();
    verifications='';
  };
};
};