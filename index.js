function isBalanced(str) {
  let open = [];
  let current = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
      open.push(str[i]);
      current = str[i];
    }
    else {
      checkClose(str[i]);
    };
  };

  function checkClose(char) {
    let match;
    char === ')' ? match = '(' : char === ']' ? match = '[' : match = '{'
    if (current === match) {
      open.splice(open.length-1, 1);
    } else {
      return false;
    };
    current = open[open.length-1];
  };

  let output;
  open.length > 0 ? output = false : output = true;
  return output;
}
