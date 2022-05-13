const angleA = 50;
const angleB = 50;
const angleC = 80;

if (angleA < 0 || angleB < 0 || angleC < 0) {
    console.log("invalid");
}
else if ((angleA + angleB + angleC) == 180) {
    console.log("true");
}
else {
    console.log("false");
}