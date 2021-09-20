botao = document.getElementById('botao')
clickCount = 0
p = document.getElementById('p')

botao.addEventListener('click',  () => {
    clickCount += 1
    p.innerHTML = clickCount 
    console.log(clickCount)
})