function chessBoard(size){
    let hash = size
        space = ' '
    for (var i = 0; i < size; i++) {
      hash += '\n'
      for (var j = 0; j < size; j++) {
        if((i +j) % 2 == 0) {
          hash  += space
        } else {
          hash  += "#"
        }
      }
    }
    return hash
  }
  
  console.log(chessBoard(8))