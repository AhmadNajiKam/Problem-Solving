class Stack<T> {
  private items: T[] = [];

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}

function balancedParens(arg: string): boolean {
  const myStack = new Stack<string>();
  for (const char of arg) {
    if (char === '(' || char === '[' || char === '{')
      myStack.push(char);
    else {
      if (myStack.peek() === '(' && char === ')') myStack.pop();
      else if (myStack.peek() === '[' && char === ']') myStack.pop();
      else if (myStack.peek() === '{' && char === '}') myStack.pop();
    }
  }
  if (!myStack.isEmpty())
    return false;
  return true;
}
//Test cases in the problem itself
console.log(balancedParens('(')); //false
console.log(balancedParens('()')); //true
console.log(balancedParens(')(')); //false
console.log(balancedParens('(())')); //true
console.log(balancedParens('[](){}')); //true
console.log(balancedParens('[({})]')); //true 
console.log(balancedParens('[(]{)}')); //false
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));//true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); //false
