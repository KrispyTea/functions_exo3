let codingSchoolX = []
function abra (a) {
    codingSchoolX.push(a)
}
function braca (b) {
    codingSchoolX.splice(codingSchoolX.indexOf(b),1)
}
console.log(abra("Popan"));
console.log(braca("Popan"));
console.log(codingSchoolX);

let classeCoding18 = [];
function classe (c) {
    classeCoding18.push(c)
}
function classo (d) {
    classeCoding18.splice(classeCoding18.indexOf(d),1)
}
classe("Cactus")
classe("Mihai")
classe("Ilyas")
classe("Mohammed")
classe("Farhad")
classe("Yassin")
classe("Nicolas")
classe("Tania")
classe("Oussama")
classe("Alexis")
classo("Alexis")
classe("Issam")
classe("Anthony")
classe("Andy")
classe("Loic")
classe("Kevin")
classe("Charles")
classe("William")
classo("Cactus")
classe("Gauthier")
classe("Beytullah")
console.log(classeCoding18);