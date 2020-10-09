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