const gradeInPercentage = 91;

if (gradeInPercentage < 0 || gradeInPercentage > 100) {
  console.log("Erro, nota incorreta!");
} else if (gradeInPercentage >= 90) {
  console.log("A");
} else if (gradeInPercentage >= 80) {
  console.log("B");
} else if (gradeInPercentage >= 70) {
  console.log("C");
} else if (gradeInPercentage >= 60) {
  console.log("D");
} else if (gradeInPercentage >= 50) {
  console.log("E");
} else {
  console.log("F");
}