// push(element(s));   //添加新元素到栈顶
// pop();              //移除栈顶的元素，同时返回被移除的元素
// peek();             //返回栈顶的元素，不对栈做任何修改
// isEmpty();          //如果栈里没有任何元素就返回true，否则false
// clear();            //移除栈里的所有元素
// size();             //返回栈里的元素个数,类似于数组的length属性

var Stack = function() {
    this.items = [];
}

Stack.prototype.push = (function(element) {
    this.items.push(element);
} )

Stack.prototype.pop = function() {
    var pop = this.items.pop()
    console.log(pop);
    return pop;
}

Stack.prototype.peek = function(){
    console.log(this.items[this.items.length - 1])
    return this.items[this.items.length - 1];
}

Stack.prototype.isEmpty = function() {
    console.log(this.items.length == 0);
    return this.items.length == 0;
}

Stack.prototype.clear = function() {
    this.items = [];
}

Stack.prototype.size = function() {
    console.log(this.items.length);
    return this.items.length;
}

Stack.prototype.print = function() {
    console.log(this.items.toString());
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.peek();
stack.push(4);
stack.pop();
stack.size();
stack.print();