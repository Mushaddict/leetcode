// push(element(s));   //添加新元素到栈顶
// pop();              //移除栈顶的元素，同时返回被移除的元素
// peek();             //返回栈顶的元素，不对栈做任何修改
// isEmpty();          //如果栈里没有任何元素就返回true，否则false
// clear();            //移除栈里的所有元素
// size();             //返回栈里的元素个数,类似于数组的length属性

function Stack () {
    var items = [];

    this.push = function(element) {
        items.push(element);
    }

    this.pop = function() {
        return items.pop();
    }

    this.peek = function() {
        return items[items.length - 1];
    }

    this.isEmpty = function() {
        return items.length == 0;
    }

    this.clear = function() {
        items = [];
    }

    this.size = function() {
        return items.length;
    }

    this.print = function() {
        console.log(items.toString());
    }
}

var stack = new Stack();
stack.print();
stack.push(1);
stack.print();