//                                 Parte 1

//atividade 1
let h1 = document.createElement('h1')
document.getElementsByTagName('body')[0].appendChild(h1)
h1.innerText = 'Exercício 5.2 - JavaScript DOM'

//atividade 2
let main = document.createElement('main')
main.classList.add('main-content')
document.getElementsByTagName('body')[0].appendChild(main)

//atividade 3 
let section = document.createElement('section')
section.classList.add('center-content')
document.getElementsByTagName('main')[0].appendChild(section)

//atividade 4
let p = document.createElement('p')
p.innerText = 'algum texto';
document.getElementsByTagName('section')[0].appendChild(p)

//atividade 5
let section2 = document.createElement('section')
section2.classList.add('left-conten')
document.getElementsByTagName('main')[0].appendChild(section2)

//atividade 6
let section3 = document.createElement('section')
section3.classList.add('right-content')
document.getElementsByTagName('main')[0].appendChild(section3)

//atividade 7
let imagem = document.createElement('img')
imagem.src ='https://picsum.photos/200' 
imagem.classList.add('small-image')
document.getElementsByTagName('section')[0].appendChild(imagem)

//atividade 8
let ul = document.createElement('ul')
let li1 = document.createElement('li')
let li2 = document.createElement('li')
let li3 = document.createElement('li')
let li4 = document.createElement('li')
let li5 = document.createElement('li')
let li6 = document.createElement('li')
let li7 = document.createElement('li')
let li8 = document.createElement('li')
let li9 = document.createElement('li')
let li10 = document.createElement('li')

document.getElementsByTagName('section')[2].appendChild(ul)
document.getElementsByTagName('ul')[0].appendChild(li1)
document.getElementsByTagName('ul')[0].appendChild(li2)
document.getElementsByTagName('ul')[0].appendChild(li3)
document.getElementsByTagName('ul')[0].appendChild(li4)
document.getElementsByTagName('ul')[0].appendChild(li5)
document.getElementsByTagName('ul')[0].appendChild(li6)
document.getElementsByTagName('ul')[0].appendChild(li7)
document.getElementsByTagName('ul')[0].appendChild(li8)
document.getElementsByTagName('ul')[0].appendChild(li9)
document.getElementsByTagName('ul')[0].appendChild(li10)

//atividade 9
let h31 = document.createElement('h3')
let h32 = document.createElement('h3')
let h33 = document.createElement('h3')
document.getElementsByTagName('main')[0].appendChild(h31)
document.getElementsByTagName('main')[0].appendChild(h32)
document.getElementsByTagName('main')[0].appendChild(h33)


//                                                Parte2

//atividade 1
let tilte = document.createElement('title')
document.getElementsByTagName('h1')[0].appendChild(tilte)

//atividade 2
h31.classList.add('description')
h32.classList.add('description')
h33.classList.add('description')

//atividade 3
main.removeChild(section2)

//atividade 4
section3.style.marginRight='auto'

//atividade 5
section.style.backgroundColor = 'green'

//atividade 6
ul.removeChild(li9)
ul.removeChild(li10)