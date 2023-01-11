import './style.css'

const urlCat = 'https://aws.random.cat/meow'
const urlDog = 'https://dog.ceo/api/breeds/image/random'
const cat = document.querySelector('#cat')
const dog = document.querySelector('#dog')
const surprise = document.querySelector('#surprise')

const fotos = (param) => {
    const link = param === "cat" ? urlCat : urlDog 
    const file = param === "cat" ? 'file' : 'message'
        fetch(link).then((response) => response.json()).then((id) => {
        const img = document.querySelector('img');
        img.src = id[file]
    })
}

cat.addEventListener('click', () => fotos('cat'))

dog.addEventListener('click', () => fotos('dog'))

surprise.addEventListener('click', () => {
    const animais = Math.random() > 0.5 ? 'cat' : 'dog';
    fotos(animais)
})

