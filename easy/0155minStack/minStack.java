import java.util.*;

public class minStack{

    // 数据栈
    private Stack<Integer> data;
    // 辅助栈
    private Stack<Integer> helper;

    /**
     * initialize your data structure here.
     */
    public minStack() {
        data = new Stack<Integer>();
        helper = new Stack<Integer>();
    }

    public void push(int x) {
        // 辅助栈在必要的时候才增加
        data.add(x);
        if(helper.isEmpty() || x <= helper.peek()) {
            helper.add(x);
        }
    }

    public void pop() throws NoSuchElementException {
        if(data.isEmpty()) {
            throw new NoSuchElementException("can't pop from an empty stack");
        }
        int top = data.pop();
        if(top == helper.peek()){
            helper.pop();
        }
    }

    public int top() throws NoSuchElementException {
        if(data.isEmpty()) {
            throw new NoSuchElementException("can't find existing element");
        }
        return data.peek();
    }

    public int getMin() throws NoSuchElementException {
        if(data.isEmpty()) {
            throw new NoSuchElementException("can't find existing element");
        }
        return helper.peek();
    }

    public void print() {
        System.out.println("element in data: ");
        for (int element : data) {
            System.out.println(element);
        }
        System.out.println("");
        System.out.println("element in helper: ");
        for (int element : helper) {
            System.out.println(element);
        }
    }

}