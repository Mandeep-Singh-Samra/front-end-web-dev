function appendToDisplay(val) {
  document.getElementById("display").value += val;
}
function calculateResult() {
  const result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;
}
function clearDisplay() {
  document.getElementById("display").value = '';
}
