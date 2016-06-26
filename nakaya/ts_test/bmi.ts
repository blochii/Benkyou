function getBMI(weight: number, tall: number): number {
  return weight / (tall * tall);
}

var bmi = getBMI (42, 150);
console.log(bmi);
