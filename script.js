const result = (e) => {
  var i,
    l = e.length,
    char,
    first,
    stack = [];

  for (i = 0; i < l; i++) {
    char = e[i];

    if (char == "{" || char == "(" || char == "[") {
      stack.push(char);
      first = char;
    } else if (char == "}" || char == ")" || char == "]") {
      if (first) {
        if (
          (char == "}" && first == "{") ||
          (char == ")" && first == "(") ||
          (char == "]" && first == "[")
        ) {
          stack.pop();
          first = stack.length > 0 ? stack[stack.length - 1] : undefined;
        }
      } else {
        return false;
      }
    }
  }

  return stack.length == 0;
};

const showResult = () => {
  resultInp.innerHTML = result(inp.value);
};

document.onkeypress = (e) => {
  if (e.key == "Enter") {
    resultInp.innerHTML = result(inp.value);
  }
};
