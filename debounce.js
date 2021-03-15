const { time } = require("console");

function debounce(fn,delay) {
  clearTimeout(timer);
  timer = setTimeout(function(){
    fn();
  },delay);
};

function debounce(fun,delay) {
  var timer;
  return function () {
    var _this = this
    var args = arguments;
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function(){
      fn.apply(_this,args);
    },delay)
  }
}

function throttle(fn, delay) {
  var timer;
  return function() {
    var _this = this;
    var args = arguments;
    if(timer) {
      return
    }
    timer = setTimeout(function(){
      fn.apply(_this,args);
      timer = null;                                                                                                                                                                                                                                                                                                        
    },delay)
  }
}

function throttle(fn, delay) {
  var previous;
  return function() {
    var _this = this;
    var args = arguments;
    var now = new Date();
    if(now - previous> delay){
      fn.apply(_this.args);
      previous = now;
    }
  }
}