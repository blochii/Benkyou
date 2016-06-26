function getBMI(weight, tall) {
    return weight / (tall * tall);
}
var bmi = getBMI(42, 150);
console.log(bmi);
