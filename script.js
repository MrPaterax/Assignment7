let lucasHeight = 1.69
let lucasWeight = 78
let johnHeight = 1.95
let johnWeight = 92

let johnBMI = johnWeight / johnHeight ** 2
let lucasBMI = lucasWeight / lucasHeight ** 2

let lucasHigherBMI

if(johnBMI > lucasBMI)
  lucasHigherBMI = false;
else
  lucasHigherBMI = true;

let answer = `Lucas and John are friends, Lucas is ${lucasHeight} m tall and John is ${johnHeight} m tall. So John has higher BMI than Lucas, that is ${lucasHigherBMI}.`

alert(answer)

//version 2
lucasHeight = 1.88
lucasWeight = 95
johnHeight = 1.76
johnWeight = 85

johnBMI = johnWeight / johnHeight ** 2
lucasBMI = lucasWeight / lucasHeight ** 2

if(johnBMI > lucasBMI)
  lucasHigherBMI = false;
else
  lucasHigherBMI = true;

 answer = `Lucas and John are friends, Lucas is ${lucasHeight} m tall and John is ${johnHeight} m tall. So John has higher BMI than Lucas, that is ${lucasHigherBMI}.`

alert(answer)
