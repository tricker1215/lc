//难点二

//楼梯导航
var list = document.getElementById('list');
var contentParts = document.querySelectorAll('.block')
var lis = document.querySelectorAll('#list li')

list.onclick = function (e) {
  if (e.target.tagName.toLowerCase() === 'li') {
    var n = e.target.getAttribute('data-n');
    var contentPart = document.querySelector('.block[data-n=' + n + ']');
    // document.documentElement.scrollTop = contentPart.offsetTop + 340
    // 改为滑动过渡
    window.scrollTo({
      top: contentPart.offsetTop + 400,
      left: 0,
      behavior: "smooth"
    })
  }
}
var offsetArr = []

for (var i = 0; i < contentParts.length; i++) {
  offsetArr.push(contentParts[i].offsetTop + 400)
}

offsetArr.push(Infinity)


var nowfloor = -1;
window.onscroll = function () {
  var scrollTop = document.documentElement.scrollTop;
  // console.log(scrollTop)
  for (var i = 0; i < offsetArr.length; i++) {
    if (scrollTop >= offsetArr[i] && scrollTop < offsetArr[i + 1]) {
      break
    }
  }
  if (nowfloor !== i) {
    nowfloor = i;

    for (var j = 0; j < lis.length; j++) {
      if (j === i) {
        lis[j].className = ' item current';
      } else {
        lis[j].className = ' item';
      }
    }
  }
}


// 难点三

// 摄像头调用
const getUserMedia1 = (
  navigator.getUserMedia || 
  navigator.webkitGetUserMedia || 
  navigator.mozGetUserMedia || 
  navigator.msGetUserMedia);

// 打开摄像头
// getUserMedia.call(要调用的对象，约束条件，调用成功的函数，调用失败的函数)
getUserMedia1.call(navigator, { video: true, audio: false }, function (localMediaStream) {
  mediaStreamTrack1 = localMediaStream.getTracks()[0];
  video.srcObject = localMediaStream;
  video.play();
  console.log("打开摄像头");
}, function (e) {
  console.log("获取摄像头失败！！")
});

// 关闭摄像头
function stopMedia1() {
  console.log("关闭摄像头");
  mediaStreamTrack1.stop();
}