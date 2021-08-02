let a = 1
let b = 1
let c = 1


if ( a % 2 === 0) {
    if (b % 2 ===0) {
        if (c % 2 === 0) {
            console.log(true) } else {console.log(false)}
        }
     }
else if (b % 2 ===0) {
    if (c % 2 === 0) {
        console.log(true)  } else{ console.log(false)}
   
}

else if (c % 2 === 0) {
    console.log(true) 
} else { console .log( false)}