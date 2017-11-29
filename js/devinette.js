/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
nombre = 0;
var essais = 0;
while(nombre !== solution && essais<=5)
    {
        nombre = Number(prompt("donner un nombre entre 1 et et 100 :"));
        if(nombre < solution)
            {
                console.log(nombre+" est trop petit")
            } else if(nombre > solution){
                
                console.log(nombre+" est trop grand");
            }
        essais++;
        
    }
if(essais > 5)
{
    console.log("Perdu...La solution ètait "+solution);
}else 
{
console.log("Bravo la solution était "+solution);
console.log("Vous avez trouvé en "+essais+" essai(s)");
}




//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme