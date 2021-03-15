Array.prototype.bubble = function () {
  for(let i = 0; i < this.length; i++) {
    for(let j=0;j<this.length-1-i;j++){
      if(this[j] > this[j+1]){
        const temp = this[j];
        this[j] = this[j+1];
        this[j+1] = temp;
      }
    }
  }
}

const arr = [5,4,3,2,1]
arr.bubble();

// 时间辅助度 O(n^2)