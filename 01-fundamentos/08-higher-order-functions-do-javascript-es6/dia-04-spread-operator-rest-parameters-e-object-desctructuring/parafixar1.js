// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Manga', 'Uva', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Chocolate', 'Mel'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));