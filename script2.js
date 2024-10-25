function promptNumber(message2) { // je declre une fonction qui servira a demander un nombre a l'utilisateur et qui le stoquera dans promptresult
    const message = prompt(message2)
    const promptResult = message
    return promptResult
}

function didIWin(givenNumber,otherNumber) {//une autre fonction qui traitera le resultat de la premiere fonction
    if(givenNumber == otherNumber) {// cette condition permet de dire si le joueur rentre le bon numero alors il est vrai et termine le jeu en lui afficahant un messagge bravo
        alert("Bravo")
        return true
    }
    else {//deux conditions sont necessaire en cas d'erreur, les messages donnent plus d'indication au joueur pour qu'il trouve le chiffre gagant 
        if(givenNumber < otherNumber) {
            alert("Plus grand")
        }
        else{
            alert("Plus petit")
        }
        return false
    } 
}

function players() {// cette etape la n'est pas fini car je ne suis pas sur de bien la comprendre mais je devais essayer 
    let resultNumber = promptNumber("choisie un nombre entre 0 et 50")// d'ou la présence d'un deuxième argument dans didIWin 
    while(resultNumber < 0 || resultNumber > 50) {
        resultNumber = promptNumber("choisie un nombre ente 0 et 50")
    }
        return resultNumber
}

function gamePlay() {//cette fonction permet de rappeler les deux autres, afin qu'elle ne s'execute pas que une seule fois une boucle est la pour rapeller la premiere et le deuxieme
    let givenNumber = promptNumber("taper un nombre") 

    while(didIWin(givenNumber) == false) {
       givenNumber = promptNumber("taper un nombre")
    }
    players(otherNumber)
}
    
gamePlay()// le rappel de la fonction fait en sorte que le jeu fonctionne