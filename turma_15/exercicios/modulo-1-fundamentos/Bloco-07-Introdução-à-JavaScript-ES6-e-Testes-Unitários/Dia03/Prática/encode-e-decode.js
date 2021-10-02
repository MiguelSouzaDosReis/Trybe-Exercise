function encode(codigo) {
    let encode = [];
    for (let index = 0; index < codigo.length; index++) {
      if (codigo[index] == 'a') {
        encode.push('1');
      } else if (codigo[index] == 'e') {
        encode.push('2');
      } else if (codigo[index] == 'i') {
        encode.push('3');
      } else if (codigo[index] == 'o') {
        encode.push('4');
      } else if (codigo[index] == 'u') {
        encode.push('5');
      } else {
        encode.push(codigo[index]);
      }
    }
  
    return (encode.join(''));
  }
  encode('hello');
  function decode(codigo) {
    let decode = [];
    for (let index = 0; index < codigo.length; index++) {
      if (codigo[index] == 1) {
        decode.push('a');
      } else if (codigo[index] == 2) {
        decode.push('e');
      } else if (codigo[index] == 3) {
        decode.push('i');
      } else if (codigo[index] == 4) {
        decode.push('o');
      } else if (codigo[index] == 5) {
        decode.push('u');
      } else {
        decode.push(codigo[index]);
      }
    }
    return (decode.join(''));
  }