const mot = ["appartement"];

function blender(word) {
  const word_blender = word.split(' ');
  if (typeof word === "number") {
    return;
  } else {
    for (let position = word_blender.length - 1; position >= 1; position--) {
      let hasard = Math.floor(Math.random() * (position + 1));

      let sauve = word_blender[position];
      word_blender[position] = word_blender[hasard];
      word_blender[hasard] = sauve;
      console.log(word_blender);
    }
    return word_blender;
  }
}

function testes(word_blender) {
  if (word_blender === mot) {
    blender(mot);
  }
}

let start = blender(mot);
console.log(start);