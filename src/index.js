module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const closeToOpen = {};
  const openBrackets = [];
  const sameBrackets = [];

  for (let i = 0; i < bracketsConfig.length; i += 1) {
    const [open, close] = bracketsConfig[i];
    closeToOpen[close] = open;
    openBrackets.push(open);
    if (open === close) {
      sameBrackets.push(open);
    }
  }

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    const top = stack[stack.length - 1];

    if (sameBrackets.includes(char)) {
      if (top === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (stack.length === 0 || stack.pop() !== closeToOpen[char]) {
      return false;
    }
  }

  return stack.length === 0;
};
