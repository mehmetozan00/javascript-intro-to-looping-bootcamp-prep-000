forLoop(array){
  for (let i = 0; i < 25; i++) {
    if (i===0) {
      array.push('');
    }
    else {
      array.push('s');
    }
    return array;
  }
}
