const isValid = function (s) {
    let valid =  true;
    const stack = [];
    const mapper = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    };

    // i = 0, 1, 2, 3, 4 ...... in string
    for (let i in s) {
        const v = s[i];                         //v 是 s里每一个元素
        if (["(", "[", "{"].indexOf(v) > -1) {  // 如果存在这三种括号中的一个
            stack.push(v);                      // 把当前元素放入栈中
        } else {
            const peak = stack.pop();           // 从stack里pop出一个
            if (v !== mapper[peak]) {           // 如果v是mapper元素的同类型 && 存在不一样的值
                return false;
            }
        }

    }

    if (stack.length > 0) {                     // 最后跑完一边，如果栈不为空，则报错
        return false;
    }

    return true;

}

var judge = isValid("{}[](){(([]))}");
console.log(judge);