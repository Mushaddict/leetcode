// 只处理英文字符（题目忽略大小写，我们前面全部转化成了小写， 因此这里我们只判断小写）和数字
function isValid(c) {
    const charCode = c.charCodeAt(0);
    const isDigit = charCode >= "0".charCodeAt(0) 
        && charCode <= "9".charCodeAt(0);
    const isChar = charCode >= "a".charCodeAt(0) 
        && charCode <= "z".charCodeAt(0);
    return isDigit || isChar;        
}
//继续
const isPalidrome = function (s) {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if(!isValid(s[left])) {
            left++;
            continue;
        }

        if(!isValid(s[right])) {
            right--;
            continue;
        }

        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            break;
        }
    }

    return left <= right;
}

var string = "abbccccbba";
var string2 = "abbcccccbba";

console.log(isPalidrome(string));
console.log(isPalidrome(string2));

var input1 = "A man, a plan, a canal: Panama";
var input2 = "race a car";

console.log(isPalidrome(input1));
console.log(isPalidrome(string2));