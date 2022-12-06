const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = () => {
    const newArray = arrays.reduce((acumulador, valorAtual) => {
        return acumulador.concat(valorAtual);
    }, [])
    return newArray;
  }
  console.log(flatten())