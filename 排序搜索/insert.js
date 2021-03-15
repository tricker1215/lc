Array.prototype.insert = function () {
  for(let i= 0; i<this.length; i++) {
    const temp = this[i];
    let j = i;
    while( j>0 ){
      if(this[j-1] > temp) {
        this[j] = this[j-1];
      }else {
        break;
      }
      j--
    }
    this[j] = temp;
  }
}