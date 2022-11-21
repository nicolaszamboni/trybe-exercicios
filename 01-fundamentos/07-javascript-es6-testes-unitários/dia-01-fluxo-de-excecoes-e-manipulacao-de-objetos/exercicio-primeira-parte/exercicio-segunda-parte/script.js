const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addNewKey = (obj, key, value) => {
    obj[key] = value;
  };
  
  addNewKey(lesson2, 'turno', 'noite');
  console.log(lesson2);

  const keysObj = (obj) => Object.keys(obj)
  console.log(keysObj(lesson1))

  const objSize = (obj) => Object.keys(obj).length
  console.log(objSize(lesson2))

  const valueObj = (obj) => Object.values(obj)
  console.log(valueObj(lesson2))

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  console.log(allLessons)

  const getNumberOfStudents = (obj) => {
    let total = 0;
    const keys = Object.keys(obj);   
    for (index in keys) {
      total += obj[keys[index]].numeroEstudantes; // incremente a variável total a cada iteração
    }
    return total; // a função retorna o total de alunos após as iterações do "for/in"
  };
  console.log(getNumberOfStudents(allLessons));

  const verifyPair = (obj, key, value) => {
    const entries = Object.entries(obj);
    let isEqual = false;
    for (let index in entries) {
      if (entries[index][0] === key && entries[index][1] === value) 
      console.log(entries[index][0])
      isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'numeroEstudantes',20));

  const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const keys = Object.keys(obj);
    for (index in keys) {
      if(obj[keys[index]].materia === 'Matemática'){
      total += obj[keys[index]].numeroEstudantes;
      }
    }
    return total;
  }
  console.log(getNumberOfStudentsMath(allLessons));

  