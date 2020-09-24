const depth = function(root) {
  var num = root.length;

  var i = 0;
  while(true) {
    if(num >= Math.pow(2, i) && num < Math.pow(2, i+1)) {
      return i + 1;
    }
    i++;
  }
}

var root = [3,9,20,null,null,15,7, 8];

console.log(depth(root));