const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1 ){
    /*Par exemple si on prend
    (4, 1) le resultat attendu
    est : Hole-in-one!*/
    console.log(names[0]);
  return names[0]
  }
  else if (strokes <= par-2){
    /*Par exemple si on prend
    (4, 2) le resultat attendu
    est : Eagle*/    
    console.log(names[1]);
    return names[1]
  }
  else if (strokes == par-1){
    console.log(names[2]);
    return names[2]
  }
  else if (strokes == par ){
    console.log(names[3]);
    return names[3]
  }
  else if (strokes== par +1){
    console.log(names[4]);
    return names[4]
  }
  else if (strokes== par +2){
    console.log(names[5]);
    return names[5]
  }
  else if (strokes >= par +3){
    console.log(names[6]);
  return names[6];
}
  /* Pour chaque changement du parametre 
  le resultat attendu dans la console
  vas changer */
}
golfScore(5, 5);

module.exports = golfScore;