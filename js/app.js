const mot = ["appartement"];

function blender(word) {
  let word_blender = [];
  if (!typeof word === "number") {
    return;
  }
  for (let i = 0; i < word.length; i++) {
    const element = word[i];
  }
  return word_blender;
}

function testes(word_blender) {
  if (word_blender === mot) {
    blender(mot);
  }
}
var T = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

for (var position = T.length - 1; position >= 1; position--) {
  var hasard = Math.floor(Math.random() * (position + 1));
  
  var sauve = T[position];
  T[position] = T[hasard];
  T[hasard] = sauve;
}

println(T);
