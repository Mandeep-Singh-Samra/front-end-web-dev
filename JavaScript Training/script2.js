function getval(marks) {
  if (marks >= 90 && marks <= 100) return "A";

  if (marks >= 80 && marks <= 89) return "B";

  if (marks >= 70 && marks <= 79) return "C";

  if (marks >= 60 && marks <= 69) return "D";

  if (marks >= 33 && marks <= 59) return "E";

  if (marks >= 0 && marks < 33) return "F";
  return "Invalid Marks";
}
console.log(getval(85));
