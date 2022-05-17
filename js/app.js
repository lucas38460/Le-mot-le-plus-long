const mot = ["appartement"];

function blender([word]) {
  const word_blender = word.split("");
  if (typeof word === "number") {
    console.log("mauvaise piste");
    return;
  } else {
    for (let position = word_blender.length - 1; position >= 1; position--) {
      let hasard = Math.floor(Math.random() * (position + 1));
      let sauve = word_blender[position];
      word_blender[position] = word_blender[hasard];
      word_blender[hasard] = sauve;
    }
    return word_blender.join("");
  }
}

function testes(mot) {
  blender(mot);
  if (mot === word_blender) {
    blender(mot);
  }
}

let rap = blender(mot);
console.log(rap);
