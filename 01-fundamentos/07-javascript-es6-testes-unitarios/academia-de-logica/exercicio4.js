const movieRatings = {
    'The Godfather': 9.2,
    'The Matrix': 8.7,
    'The Lion King': 8.5,
    'Fight Club': 8.8,
    'The Prestige': 8.5,
  };
  
  /*
  
  Exercício 4:
  
  Escreva uma função que recebe por parâmetro um objeto com as notas de filmes (movieRatings), e tem um segundo parâmetro opcional.
  
  Caso não venha nada no segundo parâmetro o retorno será a média das notas dos filmes, mas caso o segundo parâmetro venha preenchido, deve vir com o nome de um filme, e o retorno será um booleano confirmando se o filme se encontra no objeto ou não.
  
  */
  
  // Escreva seu código aqui!

  const averageRating = (object) => {
    const moviesRatingList = Object.values(object);
    let sumRating = 0;
  
    for (let rating of moviesRatingList) {
      sumRating += rating 
    }
  
    return sumRating / moviesRatingList.length;
  }
  
  const findMovieOrAvgRating = (object, movie) => {
    if (movie) {
      const moviesList = Object.keys(object);
      return moviesList.includes(movie);
    }
  
    return averageRating(object);
  };

  
  console.log(
    findMovieOrAvgRating(movieRatings, 'The Matrix')
  ); // true
  
  console.log(
    findMovieOrAvgRating(movieRatings, 'The Xablau Chronicles')
  ); // false
  
  console.log(
    findMovieOrAvgRating(movieRatings)
  ); // 8.74