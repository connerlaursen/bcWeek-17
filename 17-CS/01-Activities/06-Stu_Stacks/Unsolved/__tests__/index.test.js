const Stack = require("../index");

describe("Stack class", () => {
  // Variables for testing
  const inputArray = [1, 2, 3, 4];
  const stack = new Stack(inputArray);
  const newItem = 5;
  
  test("Can instantiate a new stack with an empty array", () => {
    const stack = new Stack();
    expect(stack).toEqual({ stackContainer: [] });
  });

  test("Can instantiate a new queue with an empty argument", () => {
    expect(stack).toEqual({ stackContainer: [1, 2, 3, 4] });
  });

  test("Can add a new element to the top of the stack", () => {
    stack.add(newItem);
    expect(stack).toEqual({ stackContainer: [1, 2, 3, 4, 5] });
  });

  test("Can remove items from the top of the stack", () => {
    const val = stack.remove();
    expect(val).toEqual(5);
    expect(stack).toEqual({ stackContainer: [1, 2, 3, 4] });
  });
});
