 let player = {
    name : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals : { golden: 2, silver: 3 },

}

player["A jogadora Marta Silva tem 34 anos de idade"]= player.name + player.lastName + player.age

 console.log(player["A jogadora Marta Silva tem 34 anos de idade"]) 

 player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

 console.log(player.bestInTheWorld + "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes");
  
 console.log(player.medals.golden+ player.medals.silver + "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata") 