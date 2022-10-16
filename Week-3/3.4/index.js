function createStack() {
  var items = [];
  return {
    push(item) {
      items.push(item);
      console.log("inside push");
    },
    pop() {
      console.log("inside push");
      return items.pop();
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5stack.items;// => [10]
stack.items = [10, 100, 1000]; // Encapsulationbroken!
console.log(stack.item);
